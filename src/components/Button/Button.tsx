import type { MouseEvent } from "react";
import "./Button.scss";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
};

function ButtonContent({ text }: { text: string }) {
  return (
    <>
      <svg
        className="pixel-button__icon"
        width="16"
        height="12"
        viewBox="0 0 16 12"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 6 H11 M8 2 L14 6 L8 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
      <span>{text}</span>
    </>
  );
}

export default function Button({ text, type = "button", href, disabled }: ButtonProps) {
  const className = disabled ? "pixel-button pixel-button--disabled" : "pixel-button";

  if (href) {
    const blockNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault();
      }
    };

    return (
      <a
        className={className}
        href={href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={blockNavigation}
      >
        <ButtonContent text={text} />
      </a>
    );
  }

  return (
    <button className={className} type={type} disabled={disabled}>
      <ButtonContent text={text} />
    </button>
  );
}
