import type { FocusEvent } from "react";

export type Skill = {
  id: string;
  name: string;
  icon?: string;
  badge?: string;
};

type SkillCardProps = Skill & {
  active: boolean;
  pinned: boolean;
  tabIndex?: number;
  onHover: (id: string) => void;
  onFocus: (id: string) => void;
  onBlur: (event: FocusEvent<HTMLButtonElement>) => void;
  onToggle: (id: string) => void;
};

// Компонент карточки навыка
export default function SkillCard({
  id,
  name,
  icon,
  badge,
  active,
  pinned,
  tabIndex,
  onHover,
  onFocus,
  onBlur,
  onToggle,
}: SkillCardProps) {
  return (
    <button
      type="button"
      className={`skill-card${active ? " is-active" : ""}`}
      aria-pressed={pinned ? true : undefined}
      tabIndex={tabIndex}
      onMouseEnter={() => onHover(id)}
      onFocus={() => onFocus(id)}
      onBlur={onBlur}
      onClick={() => onToggle(id)}
    >
      {icon ? (
        <img
          className="skill-card__icon"
          src={icon}
          alt=""
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="skill-card__badge" aria-hidden="true">{badge}</span>
      )}
      <span className="skill-card__name">{name}</span>
    </button>
  );
}
