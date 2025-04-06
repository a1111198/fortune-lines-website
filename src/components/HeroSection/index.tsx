import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-[100vw] h-auto relative">
      <div className="relative w-full h-[calc(100vh)] hidden md:block">
        <Image
          src="/Webp/Desktop Webp/Hero image.webp"
          alt="hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative w-full h-[calc(100vh)] md:hidden">
        <Image
          src="/Webp/Mobile Webp/Hero image.webp"
          alt="hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[120px] md:w-[148px] h-[34px] md:h-[42px]">
        <Image
          src="/Logo.svg"
          alt="Auria Logo"
          fill
          priority
          sizes="(max-width: 768px) 120px, 148px"
          className="object-contain"
        />
      </div>
      <a
        href="https://wa.me/917742772130?text=hi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.24)",
          }}
          className="absolute bottom-0 gap-x-3 translate-y-1/2 left-1/2 -translate-x-1/2 w-auto h-auto bg-white flex flex-row items-center justify-between py-4 px-10 rounded-[100px] cursor-pointer"
        >
          <FaWhatsapp className="text-[20px] text-black" />
          <p className="text-[16px] whitespace-nowrap md:text-[20px] font-figtree_medium">
            Try directly on whatsapp
          </p>
        </div>
      </a>
      <div className="absolute md:hidden flex flex-col items-center justify-start gap-4 bottom-[60px] left-1/2 -translate-x-1/2 w-full h-auto px-4">
        <p className="text-[#fff] leading-[36px] text-center text-balance text-[32px] font-figtree_bold">
          Know about your skin with AI for FREE.
        </p>
        <p className="text-[#FFF] text-center text-balance leading-[24px] tracking-[-0.16px] font-figtree_regular">
          No more guessing. No more wasted money. With just a selfie, get
          personalized skincare plan in minutes. For free.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
