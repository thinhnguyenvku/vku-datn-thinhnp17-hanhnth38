import { useEffect } from "react";

export default function useUnloadWarning(condition = true) {
  useEffect(() => {
    if (!condition) {
      return;
    }

    const listener = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", listener);
    } else {
      console.error("Cannot redirect because `window` is not available.");
    }

    return () =>
      typeof window !== "undefined"
        ? window.removeEventListener("beforeunload", listener)
        : console.error("Cannot redirect because `window` is not available.");
  }, [condition]);
}
