import { useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import SkillCard from "../SkillCard";
import type { Skill } from "../SkillCard";
import "./SkillCarousel.scss";

const DRAG_THRESHOLD = 8;

type SkillCarouselProps = {
  skills: Skill[];
  activeId: string | null;
  pinnedId: string | null;
  label: string;
  className?: string;
  onHover: (id: string) => void;
  onFocus: (id: string) => void;
  onBlur: (event: FocusEvent<HTMLButtonElement>) => void;
  onSelect: (id: string) => void;
  onLeave: () => void;
};

// Хук для управления каруселем навыков
function useSkillCarousel() {
  const scrollerRef             = useRef<HTMLDivElement>(null);
  const suppressClickRef        = useRef(false);
  const draggingRef             = useRef(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    let glideFrame = 0;
    let gliding    = false;
    let tracking   = false;
    let wrapping   = false;
    let pointerId  = -1;
    let startX     = 0;
    let startY     = 0;
    let lastX      = 0;
    let lastT      = 0;
    let originScroll = 0;
    let velocity   = 0;

    const loopWidth = () => {
      const set = scroller.firstElementChild?.firstElementChild;

      return set instanceof HTMLElement ? set.offsetWidth : 0;
    };

    const wrap = (value: number) => {
      const loop = loopWidth();

      if (loop <= 1) return 0;

      const mod = value % loop;

      return mod < 0 ? mod + loop : mod;
    };

    const stopGlide = () => {
      gliding = false;
      window.cancelAnimationFrame(glideFrame);
    };

    const detachPointer = () => {
      tracking = false;
      draggingRef.current = false;
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
    };

    const stopTracking = () => {
      detachPointer();
      setDragging(false);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!tracking || event.pointerId !== pointerId) return;

      const dx = event.clientX - startX;
      const dy = event.clientY - startY;

      if (!draggingRef.current) {
        if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;

        if (Math.abs(dy) > Math.abs(dx)) {
          suppressClickRef.current = true;
          stopTracking();

          return;
        }

        draggingRef.current = true;
        suppressClickRef.current = true;
        setDragging(true);
      }

      if (event.cancelable) event.preventDefault();

      const now = performance.now();
      const dt = now - lastT;

      if (dt > 0 && dt < 50) {
        velocity = Math.max(-2.5, Math.min(2.5, (event.clientX - lastX) / dt));
      }

      lastX = event.clientX;
      lastT = now;
      wrapping = true;
      scroller.scrollLeft = wrap(originScroll - dx);
      wrapping = false;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;

      const wasDragging = draggingRef.current;
      const releaseVelocity = -velocity;

      stopTracking();

      if (!wasDragging || Math.abs(releaseVelocity) < 0.05) return;

      gliding = true;
      let glideLast = performance.now();
      let glideVelocity = releaseVelocity;

      const glide = (now: number) => {
        if (!gliding) return;

        const dt = Math.min(32, now - glideLast);

        glideLast = now;
        glideVelocity *= 0.92 ** (dt / 16);

        if (Math.abs(glideVelocity) < 0.02) {
          gliding = false;

          return;
        }

        wrapping            = true;
        scroller.scrollLeft = wrap(scroller.scrollLeft + glideVelocity * dt);
        wrapping = false;
        glideFrame = window.requestAnimationFrame(glide);
      };

      glideFrame = window.requestAnimationFrame(glide);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || tracking) return;

      stopGlide();
      tracking = true;
      pointerId = event.pointerId;
      startX = lastX = event.clientX;
      startY = event.clientY;
      originScroll = scroller.scrollLeft;
      lastT = performance.now();
      velocity = 0;
      suppressClickRef.current = false;

      document.addEventListener("pointermove", onPointerMove, { passive: false });
      document.addEventListener("pointerup", onPointerUp);
      document.addEventListener("pointercancel", onPointerUp);
    };

    const onScroll = () => {
      if (wrapping || tracking) return;

      const loop = loopWidth();
      const left = scroller.scrollLeft;

      if (loop <= 1 || (left > 1 && left < loop - 1)) return;

      wrapping = true;
      scroller.scrollLeft = wrap(left);
      wrapping = false;
    };

    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(glideFrame);
      detachPointer();
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { scrollerRef, suppressClickRef, draggingRef, dragging };
}

export default function SkillCarousel({
  skills,
  activeId,
  pinnedId,
  label,
  className,
  onHover,
  onFocus,
  onBlur,
  onSelect,
  onLeave,
}: SkillCarouselProps) {
  const { scrollerRef, suppressClickRef, draggingRef, dragging } = useSkillCarousel();

  const selectSkill = (id: string) => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;

      return;
    }

    onSelect(id);
  };

  const hoverSkill = (id: string) => {
    if (draggingRef.current) return;

    onHover(id);
  };

  return (
    <div
      className={`skill-carousel${className ? ` ${className}` : ""}${dragging ? " is-dragging" : ""}`}
      ref={scrollerRef}
      role="region"
      aria-label={label}
      onMouseLeave={onLeave}
      onDragStart={(event) => event.preventDefault()}
    >
      <div className="skill-carousel__track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="skill-carousel__set"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                {...skill}
                active={skill.id === activeId}
                pinned={skill.id === pinnedId}
                tabIndex={copy === 1 ? -1 : undefined}
                onHover={hoverSkill}
                onFocus={onFocus}
                onBlur={onBlur}
                onToggle={selectSkill}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
