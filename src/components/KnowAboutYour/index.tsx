import { FaWhatsapp } from "react-icons/fa";

const KnowAboutYour = () => {
  return (
    <section className=" hidden md:flex container mx-auto max-w-[88rem] py-[150px]  flex-col items-center justify-start ">
      <p className="text-[#102446] text-[88px] leading-[92px] font-bold tracking-[-1.76px] text-center text-balance max-w-[840px] font-figtree_bold ">
      Discover your future through your palm with AI for Free{" "}
      </p>
      <p className="text-[#102446] text-[24px] leading-[32px] font-normal max-w-[760px] mt-6 tracking-[-0.48px] text-center text-balance font-figtree_regular ">
      No more guessing. No more expensive readers. With just a palm photo, get personalized palm reading in minutes. For free.
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
          className="bg-[#102446] text-white px-10 py-4 rounded-full mt-12 flex flex-row items-center justify-center font-figtree_regular gap-x-2 cursor-pointer"
        >
          <FaWhatsapp className="text-[20px] " />
          <p>Try directly on whatsapp</p>
        </button>
      </a>
    </section>
  );
};

export default KnowAboutYour;
