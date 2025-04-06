"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const YouDeserveToKnow = () => {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.3, 0.9],
    ["10%", isMobile ? "-450%" : "-80%"]
  );

  const carouselImages = [
    { desktop: "/Webp/Desktop Webp/Web carousel 01.webp", mobile: "/Webp/Mobile Webp/Web carousel 01.webp" },
    { desktop: "/Webp/Desktop Webp/Web carousel 02.webp", mobile: "/Webp/Mobile Webp/Web carousel 02.webp" },
    { desktop: "/Webp/Desktop Webp/Web carousel 03.webp", mobile: "/Webp/Mobile Webp/Web carousel 03.webp" },
    { desktop: "/Webp/Desktop Webp/Web carousel 04.webp", mobile: "/Webp/Mobile Webp/Web carousel 04.webp" },
    { desktop: "/Webp/Desktop Webp/Web carousel 05.webp", mobile: "/Webp/Mobile Webp/Web carousel 05.webp" },
    { desktop: "/Webp/Desktop Webp/Web carousel 06.webp", mobile: "/Webp/Mobile Webp/Web carousel 06.webp" },
  ];

  return (
    <section
      ref={targetRef}
      className="w-full h-[350vh] md:h-[300vh] bg-[#F8F8F8]"
    >
      <div className="flex flex-col items-center justify-start w-full max-w-[1200px] pb-[56px] pt-[150px] mx-auto px-4">
        <p className="text-[#333] text-[12px] md:text-[20px] leading-normal md:leading-[30px] font-figtree_medium tracking-[1.6px] uppercase mb-4">
          All powered by AI to suit you and you only.
        </p>
        <p className="text-[#000] text-[32px] md:text-[64px] leading-[32px] md:leading-[64px] font-figtree_bold tracking-[-0.32px] md:tracking-[-1.28px] text-center">
          You deserve to know your skin.
        </p>
      </div>
      <section className="w-full sticky top-0 h-[100vh] overflow-hidden py-[0px] flex flex-col items-center justify-start">
        <motion.div
          style={{ x }}
          className="h-full flex flex-row flex-nowrap items-center justify-start gap-x-5 w-full"
        >
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-[400px] h-[700px] group overflow-hidden rounded-[24px] shadow-lg flex-shrink-0 relative"
            >
              <Image
                src={isMobile ? image.mobile : image.desktop}
                alt={`Carousel image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 400px, 400px"
                className="object-contain group-hover:scale-105 transition-all duration-300"
                priority={index < 2}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
};

export default YouDeserveToKnow;
