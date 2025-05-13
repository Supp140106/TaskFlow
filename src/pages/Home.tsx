import { AnimatedListDemo } from "@/components/AnimatedList";
import { InteractiveHoverButtonDemo } from "@/components/InteractiveHoverButton";
import { LineShadowTextDemo } from "@/components/LineShadowtext";
import { MarqueeDemo } from "@/components/Marquee";
import { AnimatedCircularProgressBarDemo } from "@/components/ProgressAnime";
import { RetroGridDemo } from "@/components/RetroGridDemo";
import { RippleDemo } from "@/components/Ripple";

export default function Home() {
  return (
    <>
      <RetroGridDemo />

      <div className="flex justify-center items-center -mt-7 sm:-mt-30 mb-10 w-full">
        <InteractiveHoverButtonDemo />
      </div>

      <div className="flex justify-center items-center mt-10 w-full">
        <MarqueeDemo />
      </div>

      <div className="flex justify-center items-center w-full">
        <RippleDemo />
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start w-full m-1">
        <div className="w-full sm:w-1/2 flex flex-col items-center space-y-6 text-center px-4">
          <LineShadowTextDemo />
          <div className="mt-12 pt-10">
            <AnimatedCircularProgressBarDemo />
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center mt-10 sm:mt-0 px-4">
          <AnimatedListDemo />
        </div>
      </div>
    </>
  );
}
