import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapTo() {
  /* gsap.to() */
  useGSAP(() => {
    gsap.to("#box-a", {
      x: 250,
      repeat: -1 /* -1 for infinity */,
      yoyo: true,
      rotation: 360,
      duration: 2,
    });
  }, []);
  return (
    <>
      <p className="text-3xl pb-6">GsapTo</p>
      <div
        id="box-a"
        className="w-20 h-20 bg-amber-600 border-2 rounded-lg flex justify-center items-center text-3xl font-bold"
      >
        A
      </div>
    </>
  );
}
