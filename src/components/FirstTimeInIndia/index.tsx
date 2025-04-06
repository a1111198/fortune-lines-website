import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FirstTimeInIndia = () => {
  return (
    <section className="container mx-auto max-w-[88rem] flex flex-col items-center justify-start  pt-[120px] ">
      <p className="text-[#000] text-[32px] md:text-[88px] text-center text-balance leading-[36px]  md:leading-[90px] tracking-[-0.32px] md:tracking-[-1.76px] font-figtree_bold">
        First time in India specially for Indian skin.
      </p>
      <div className=" w-full h-[200px]  md:h-[400px] mt-[32px] md:mt-[80px] relative">
        <Image
          src={"/Image/firsttime.png"}
          alt="youDeserveToKnow"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-[#000] text-[32px] md:text-[88px] text-center text-balance leading-[36px] md:leading-[90px] mt-[32px] md:mt-[130px] tracking-[-1.76px] font-figtree_bold max-w-[360px] md:max-w-[600px]">
        120+ brands. 800 products.
      </p>

      <p className="text-[#000] text-[32px] md:text-[48px] text-center text-balance leading-[64px] mt-[56px] md:mt-[88px] tracking-[-0.32px]  md:tracking-[-0.96px] font-figtree_bold">
        But which one is right for YOU?
      </p>
      <a
        href="https://wa.me/917742772130?text=hi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.24)",
          }}
          className="bg-[#000000] text-white px-10 py-4 rounded-full mt-6 flex flex-row items-center text-figtree_regular justify-center gap-x-2 cursor-pointer"
        >
          <FaWhatsapp className="text-[20px] " />
          <p>Try directly on whatsapp</p>
        </button>
      </a>
      <p className="text-[#000]/60 text-[20px] text-center text-balance leading-normal mt-[16px] tracking-[0.2px] font-figtree_light_italic">
        with just your selfie.
      </p>
    </section>
  );
};

export default FirstTimeInIndia;
