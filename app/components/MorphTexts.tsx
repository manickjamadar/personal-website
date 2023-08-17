"use client";
import React, { useEffect } from "react";
import getLongestText from "../utils/getLongestText";
interface Props {
  texts: string[];
  placeholder?: string;
}
const MorphTexts: React.FC<Props> = ({ texts, placeholder }) => {
  useEffect(() => {
    let requestId: number;
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2"),
    };
    if (!elts.text1 || !elts.text2) {
      return;
    }
    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction: number) {
      if (!elts.text1 || !elts.text2) {
        return;
      }
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;
      if (!elts.text1 || !elts.text2) {
        return;
      }
      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate() {
      requestId = requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (+newTime - +time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [texts]);
  return (
    <div className="relative w-full">
      <div
        id="container"
        className="absolute w-full m-auto top-0 bottom-0"
        style={{
          filter: "url(#threshold) blur(0.6px)",
        }}
      >
        <div
          id="text1"
          className="font-bold text-7xl text-orange-gradient absolute top-0 bottom-0 w-full flex justify-center items-center"
        ></div>
        <div
          id="text2"
          className="font-bold text-7xl text-orange-gradient absolute top-0 bottom-0 w-full flex justify-center items-center"
        ></div>
      </div>
      <div className="text-7xl font-bold text-transparent leading-[1.3]">
        {placeholder ? placeholder : getLongestText(texts)}
      </div>
      <svg id="filters" className="absolute top-0 bottom-0 w-full">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default MorphTexts;
