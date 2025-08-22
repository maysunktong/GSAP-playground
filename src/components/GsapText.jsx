import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function GsapText() {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".paragraph",
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, delay: 1, stagger: 0.1 }
    );
  }, []);
  return (
    <>
      <h1 id="text" className="opacity-0">
        7. GsapText
      </h1>
      <a href="https://gsap.com/docs/v3/GSAP/gsap.fromTo()" target="_blank">
        link
      </a>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam
        sit error voluptatibus iste minus inventore pariatur, incidunt commodi
        perferendis id sequi omnis voluptates aperiam fuga tempora? Explicabo
        iste aliquam exercitationem harum velit recusandae, quo quisquam illo?
        Voluptates asperiores dolores veniam voluptatum nam officiis vero magni
        quaerat, voluptas omnis! Rerum, ullam ducimus. Suscipit obcaecati
        eveniet molestiae, ab quas laudantium fugit sequi reiciendis quia
        adipisci velit deserunt, facilis rerum illum sunt excepturi eum
        perferendis aliquid id facere dolorum illo quibusdam! Vel possimus unde,
        eius repellat rem distinctio veritatis mollitia quasi cum, sunt quam
        ullam nostrum magnam iure praesentium itaque asperiores odio alias fugit
        aliquam aliquid hic fuga necessitatibus esse. Eveniet, itaque. Dolore in
        atque iusto debitis corrupti dolores at ducimus, minus et, quisquam
        minima aliquam, natus ratione nesciunt inventore animi labore. Minima
        qui, suscipit ad unde nihil at nemo voluptatibus ipsa expedita saepe ex
        sint veritatis enim numquam omnis aperiam voluptas delectus quae eveniet
        quam ipsum! Soluta, corrupti molestias ullam qui illum vel? Quo eius vel
        perspiciatis quam, maxime natus, delectus quos itaque quidem, unde
        accusantium qui quas. Laudantium dicta in alias cum fugit, blanditiis
        provident fuga. Necessitatibus quod unde itaque animi debitis? Maiores,
        provident ipsam debitis accusantium rem voluptate eveniet!
      </p>
    </>
  );
}
