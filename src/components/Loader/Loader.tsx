import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CHARACTER_SRC } from "@/assets/character";
import CodeStrip from "../Hero/CodeStrip";
import Header from "../Header/Header";
import "./Loader.scss";

const STAGES                 = ["idle", "sleep1", "sleep2", "wake", "sparkle"] as const;
const SPARKLE_STAGE          = STAGES.length - 1;
const FRAME_MS               = 700;
const FADE_MS                = 400;
const CHARACTER_TIMEOUT_MS   = 8000;

type LoaderProps = {
  ready: boolean;
  onDone: () => void;
};

// Хук для определения предпочтения уменьшения анимации
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onChange = () => setReduced(media.matches);

    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

// Компонент загрузки
export default function Loader({ ready, onDone }: LoaderProps) {
  const { t }                   = useTranslation();
  const reducedMotion           = usePrefersReducedMotion();
  const [stage, setStage]       = useState(0);
  const [leaving, setLeaving]   = useState(false);
  const [characterVisible, setCharacterVisible] = useState(false);
  const [characterFailed, setCharacterFailed]   = useState(false);
  const onDoneRef               = useRef(onDone);
  const characterRef            = useRef<HTMLImageElement>(null);
  const characterVisibleRef     = useRef(false);

  const showCharacter = () => {
    characterVisibleRef.current = true;
    setCharacterVisible(true);
  };

  if (
    ready &&
    !leaving &&
    (characterVisible || characterFailed) &&
    (reducedMotion || characterFailed || stage === SPARKLE_STAGE)
  ) {
    setLeaving(true);
  }

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const image = characterRef.current;

    if (image?.complete && image.naturalWidth > 0) {
      characterVisibleRef.current = true;
      setCharacterVisible(true);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!characterVisibleRef.current) {
        setCharacterFailed(true);
      }
    }, CHARACTER_TIMEOUT_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion || leaving || !characterVisible) {
      return;
    }

    const timer = window.setInterval(() => {
      setStage((current) => (current + 1) % STAGES.length);
    }, FRAME_MS);

    return () => window.clearInterval(timer);
  }, [reducedMotion, leaving, characterVisible]);

  useEffect(() => {
    if (!leaving) {
      return;
    }

    const timer = window.setTimeout(() => onDoneRef.current(), FADE_MS);

    return () => window.clearTimeout(timer);
  }, [leaving]);

  return (
    <div
      className={`loader${leaving ? " loader--leaving" : ""}`}
      data-stage={STAGES[stage]}
      data-character={characterVisible ? "ready" : "loading"}
      role="status"
      aria-live="polite"
    >
      <span className="loader__sr">{t("loader.loading")}</span>
      <Header logoOnly />
      <div className="loader__stage">
        <div className="loader__scene">
          <img
            ref={characterRef}
            className="loader__character"
            src={CHARACTER_SRC}
            alt=""
            decoding="sync"
            fetchPriority="high"
            onLoad={showCharacter}
            onError={() => setCharacterFailed(true)}
          />
          <span className="loader__z loader__z--one" aria-hidden="true">
            z
          </span>
          <span className="loader__z loader__z--two" aria-hidden="true">
            z
          </span>
          <span className="loader__eyes" aria-hidden="true">
            <span className="loader__eye" />
            <span className="loader__eye" />
          </span>
          <span className="loader__sparkles" aria-hidden="true">
            <span className="loader__spark">✦</span>
            <span className="loader__spark">✦</span>
            <span className="loader__spark">✦</span>
            <span className="loader__spark">✦</span>
          </span>
        </div>
      </div>
      <CodeStrip />
    </div>
  );
}
