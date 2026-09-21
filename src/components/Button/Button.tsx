import "./Button.scss";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  href?: string;
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

export default function Button({ text, type = "button", href }: ButtonProps) {
  if (href) {
    return (
      <a className="pixel-button" href={href}>
        <ButtonContent text={text} />
      </a>
    );
  }

  return (
    <button className="pixel-button" type={type}>
      <ButtonContent text={text} />
    </button>
  );
}
