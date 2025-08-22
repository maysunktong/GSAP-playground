import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapTimeline() {

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#box-blue", {
      x: 250,
      rotation: 360,
      duration: 2,
      borderRadius: "100%",
      ease: "back.inOut",
    });
    timeline.to("#box-blue", {
      y: 50,
      scale: 2,
      rotation: 360,
      duration: 2,
      borderRadius: "100%",
      ease: "back.inOut",
    });
    timeline.to("#box-blue", {
      x: 500,
      scale: 1,
      rotation: 360,
      duration: 2,
      borderRadius: "100%",
      ease: "back.inOut",
    });
  }, []);
  return (
    <>
      <a href="https://gsap.com/docs/v3/GSAP/gsap.timeline()" target="_blank">
        <p className="py-3 text-3xl">4. GsapTimeline</p>
      </a>
      <button
        type="button"
        className="py-4"
        onClick={() => {
         timeline.paused() ? timeline.play() : timeline.pause()
        }}
      >
        Play/Pause
      </button>
      <div
        id="box-blue"
        className="w-20 h-20 bg-blue-600 border-2 rounded-lg flex justify-center items-center text-3xl font-bold"
      />
    </>
  );
}
