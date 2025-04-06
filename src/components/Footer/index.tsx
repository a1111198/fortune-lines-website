import Image from 'next/image'
import React from 'react'



const Footer = () => {
    return (
      <section className='md:px-[72px]'>    
      <div className='container px-0 md:px-[70px] overflow-hidden max-w-[88rem] mx-auto bg-[#F7F7F7] rounded-[32px] border-solid border mt-[120px] mb-[72px] border-black/12'>
          <div className='flex flex-row items-center justify-between w-full h-[470px] md:h-[1100px] relative'>
              <Image 
                src='/Webp/Desktop Webp/Footer.webp' 
                alt='footer' 
                fill
                sizes="(max-width: 768px) 100vw, 88rem"
                className="object-cover"
                priority
              />
          </div>
      </div>
      </section>
  )
}

export default Footer