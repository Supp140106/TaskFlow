import { useEffect, useState } from "react";
import { LineShadowText } from "./magicui/line-shadow-text";

export function LineShadowTextDemo() {
  const [shadowColor, setShadowColor] = useState("black");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setShadowColor(isDark ? "white" : "black");
  }, []);

  return (
    <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl p-2">
      Analyse 
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Fast
      </LineShadowText>
    </h1>
  );
}
