import { useEffect, useState } from "react";
import { CHARACTER_SRC } from "@/assets/character";

type SkillTerminalProps = {
  prompt: string | null;
  line1: string;
  line2: string;
};

// Хук для анимации текста
function useTypewriter(text: string | null) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!text) {
      setOutput("");

      return;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motion.matches) {
      setOutput(text);

      return;
    }

    setOutput("");
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));

      if (index >= text.length) window.clearInterval(timer);
    }, 18);

    return () => window.clearInterval(timer);
  }, [text]);

  return output;
}

export default function SkillTerminal({ prompt, line1, line2 }: SkillTerminalProps) {
  const typedPrompt = useTypewriter(prompt);
  const idleLine = `${line1} ${line2}`;

  return (
    <div className="skills__learning">
      <div className="skills__terminal">
        {prompt ? (
          <p>{typedPrompt}</p>
        ) : (
          <>
            <p>{line1}</p>
            <p>{line2}</p>
          </>
        )}
        <p className="skills__terminal-live" aria-live="polite">
          {prompt ?? idleLine}
        </p>
        <span className="skills__terminal-cursor" aria-hidden="true">_</span>
        <img className="skills__V" src={CHARACTER_SRC} alt="" />
      </div>
    </div>
  );
}
