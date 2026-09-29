import { useEffect, useState } from "react";
import heroImage from "@/assets/images/hero.webp";
import { CHARACTER_SRC } from "@/assets/character";

const READY_TIMEOUT_MS = 8000;

// Функция для ожидания готовности шрифтов
function whenFontsReady() {
  if (!document.fonts?.ready) {
    return Promise.resolve();
  }

  return document.fonts.ready.then(() => undefined).catch(() => undefined);
}

// Функция для ожидания декодирования изображения
function whenImageDecoded(src: string) {
  return new Promise<void>((resolve) => {
    const image  = new Image();
    const finish = () => resolve();

    image.onerror = finish;

    if (typeof image.decode === "function") {
      image.src = src;
      image.decode().then(finish).catch(finish);

      return;
    }

    image.onload = finish;
    image.src    = src;
  });
}

// Хук для определения готовности героя
export function useHeroReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeout = window.setTimeout(() => {
      if (!cancelled) {
        setReady(true);
      }
    }, READY_TIMEOUT_MS);

    Promise.all([
      whenFontsReady(),
      whenImageDecoded(heroImage),
      whenImageDecoded(CHARACTER_SRC),
    ]).then(() => {
      if (!cancelled) {
        setReady(true);
      }
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, []);

  return ready;
}
