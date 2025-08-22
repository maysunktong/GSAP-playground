import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapFromTo() {

  useGSAP(() => {
    gsap.fromTo(
      "#box-green",
      { x: 100, rotation: 0, borderRadius: "0%" },
      {
        x: 250,
        rotation: 360,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        duration: 3,
        ease: "bounce.out",
      }
    );
  }, []);
  return (
    <>
      <a href="https://gsap.com/docs/v3/GSAP/gsap.fromTo()" target="_blank">
        <p className="py-3 text-3xl">3. GsapFromTo</p>
      </a>
      <div
        id="box-green"
        className="w-20 h-20 bg-green-600 border-2 rounded-lg flex justify-center items-center text-3xl font-bold"
      />
    </>
  );
}
