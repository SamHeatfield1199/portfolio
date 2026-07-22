import "./Button.scss";

export default function Button({ text }: { text: string }) {
  return (
    <button className="pixel-button">
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
    </button>
  );
}
