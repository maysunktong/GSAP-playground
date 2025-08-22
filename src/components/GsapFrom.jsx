import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapFrom() {
  /* gsap.to() */
  useGSAP(() => {
    gsap.from("#box-red", {
      x: 250, /* it starts from x:250 */
      repeat: -1 /* -1 for infinity */,
      yoyo: true,
      rotation: 360,
      duration: 3,
      ease: 'power1.inOut'
    });
  }, []);
  return (
    <>
      <p className="text-3xl py-6">2. GsapFrom</p>
      <div
        id="box-red"
        className="w-20 h-20 bg-red-600 border-2 rounded-lg flex justify-center items-center text-3xl font-bold"
      >
        A
      </div>
    </>
  );
}
