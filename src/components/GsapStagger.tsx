import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapStagger() {
  useGSAP(() => {
    gsap.to(".stagger", {
      y: 50,
      rotation: 360,
      borderRadius: "100%",
      yoyo: true,
      repeat: -1,
      /* stagger: 0.5, */
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);

  return (
    <>
      <a
        href="https://gsap.com/resources/getting-started/Staggers/"
        target="_blank"
      >
        <p className="text-3xl py-6">5. GsapStagger</p>
      </a>
      <p className="py-4">
        If multiple targets are defined, you can easily stagger the start times
        for each by setting a value like stagger: 0.1 (for 0.1 seconds between
        each start time).
      </p>
      <p>
        Or you can get much more advanced staggers by using a stagger object.
      </p>
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-yellow-600 stagger" />
        <div className="w-10 h-10 bg-yellow-600 stagger" />
        <div className="w-10 h-10 bg-yellow-600 stagger" />
        <div className="w-10 h-10 bg-yellow-600 stagger" />
        <div className="w-10 h-10 bg-yellow-600 stagger" />
      </div>
    </>
  );
}
