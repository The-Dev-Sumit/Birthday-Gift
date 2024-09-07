import React, { useEffect, useRef } from 'react';

const TextMorphAnimation = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const texts = useRef([
    "Thank You", "For This", "Beautiful", "Moments",  ":)", 
  ]);

  const morphTime = useRef(1);
  const cooldownTime = useRef(0.25);

  const textIndex = useRef(texts.current.length - 1);
  const time = useRef(new Date());
  const morph = useRef(0);
  const cooldown = useRef(cooldownTime.current);

  useEffect(() => {
    // Set your desired delay time in milliseconds (e.g., 2000ms for 2 seconds)
    const delayTime = 2000; // 2 seconds

    const startAnimation = () => {
      const animate = () => {
        requestAnimationFrame(animate);

        const newTime = new Date();
        const shouldIncrementIndex = cooldown.current > 0;
        const dt = (newTime - time.current) / 1000;
        time.current = newTime;

        cooldown.current -= dt;

        if (cooldown.current <= 0) {
          if (shouldIncrementIndex) {
            textIndex.current++;
          }
          doMorph();
        } else {
          doCooldown();
        }
      };

      const doMorph = () => {
        morph.current -= cooldown.current;
        cooldown.current = 0;

        let fraction = morph.current / morphTime.current;
        if (fraction > 1) {
          cooldown.current = cooldownTime.current;
          fraction = 1;
        }

        setMorphStyles(fraction);
      };

      const doCooldown = () => {
        morph.current = 0;
        if (text1Ref.current && text2Ref.current) {
          text2Ref.current.style.filter = '';
          text2Ref.current.style.opacity = '100%';
          text1Ref.current.style.filter = '';
          text1Ref.current.style.opacity = '0%';
        }
      };

      const setMorphStyles = (fraction) => {
        if (text1Ref.current && text2Ref.current) {
          text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
          text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

          fraction = 1 - fraction;
          text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
          text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

          text1Ref.current.textContent = texts.current[textIndex.current % texts.current.length];
          text2Ref.current.textContent = texts.current[(textIndex.current + 1) % texts.current.length];
        }
      };

      animate();
    };

    const timeoutId = setTimeout(startAnimation, delayTime);

    return () => clearTimeout(timeoutId); // Cleanup if component unmounts
  }, []);

  return (
    <div id="container" className="absolute w-full h-20 top-0 right-[5rem] bottom-[5rem] m-auto filter-[url(#threshold)] blur-[0.6px]">
      <span ref={text1Ref} className="absolute w-full text-center select-none font-Mania tracking-wide text-[60pt]"></span>
      <span ref={text2Ref} className="absolute w-full text-center select-none font-Mania tracking-wide text-[60pt]"></span>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default TextMorphAnimation;
