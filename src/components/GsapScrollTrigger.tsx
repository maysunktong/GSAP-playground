import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollTrigger() {
  const scrollRef = useRef();
  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        scale: 2,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, {scope: scrollRef}); /* put specific area of scroll */

  return (
    <>
      <a
        href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/#features"
        target="_blank"
      >
        <p className="py-3 text-3xl">6. GsapScrollTrigger</p>
      </a>
      <div
        ref={scrollRef}
        className="min-h-screen flex justify-center items-center"
      >
        <div
          id="scroll-purple"
          className="w-20 h-20 bg-purple-600 border-2 rounded-lg flex justify-center items-center text-3xl font-bold"
        />
        <div
          id="scroll-emerald"
          className="w-20 h-20 bg-emerald-500 border-2 rounded-lg flex justify-center items-center text-3xl font-bold"
        />
      </div>
    </>
  );
}
