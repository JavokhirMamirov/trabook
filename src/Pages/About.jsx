import React from 'react'
import PlanePng from "../assets/Element.svg"
import AboutListSvg from "../assets/about_list.svg"
import AboutValletSvg from "../assets/about_vallet.svg"
import AboutImgSvg from "../assets/about_img.svg"
function About() {
  return (
    <div className='w-full bg-[#F7F8FC] py-28 flex flex-col justify-center items-center'>
      <div className='w-width-1170 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-6 relative'>
            <span className='text-PrimaryB font-Volkhov text-5xl font-bold'>Things you need <span className='text-PrimaryO'>to do</span></span>
            <span className='text-Paragraph font-Poppins text-lg font-normal max-w-md'>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</span>
            <img src={PlanePng} alt='Plane' className='absolute right-[-200px]'  />
        </div>
        <div className='mt-16 flex gap-8'>
          <div className='flex flex-col gap-4 bg-white shadow-card-a p-10 rounded-lg relative'>
            <img src={AboutListSvg} className='w-12 h-12' />
            <span className='text-PrimaryB font-Volkhov text-2xl font-semibold z-[1]'>Sign Up</span>
            <span className='text-Paragraph text-base font-Poppins font-normal z-[1]'>Completes all the work associated with planning and processing</span>
            <svg width="auto" height="auto" viewBox="0 0 370 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-0 left-0 bottom-0 top-0 z-0'>
               <path d="M2 277C11 256 138 282 211 180.5C284 79 277.5 9.5 369 2.5" stroke="#FFF8F5" stroke-width="4"/>
            </svg>
          </div>
          <div  className='flex flex-col gap-4 bg-white shadow-card-a p-10 rounded-lg relative'>
            <img src={AboutValletSvg} className='w-12 h-12'/>
            <span className='text-PrimaryB font-Volkhov text-2xl font-semibold  z-[1]'>Worth of Money</span>
            <span className='text-Paragraph text-base font-Poppins font-normal z-[1]'>After successful access then book from exclusive deals & pricing</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 368 277" fill="none"  className='absolute right-0 left-0 bottom-0 top-0 z-0'>
              <path d="M2 1C11 22 140.5 15 213.5 116.5C286.5 218 276 267.5 367.5 274.5" stroke="#F5F9FF" stroke-width="4"/>
            </svg>
          </div>
          <div className='flex flex-col gap-4 bg-white shadow-card-a p-10 rounded-lg relative'>
            <img src={AboutImgSvg} className='w-12 h-12'/>
            <span className='text-PrimaryB font-Volkhov text-2xl font-semibold z-[1]'>Exciting Travel</span>
            <span className='text-Paragraph text-base font-Poppins font-normal z-[1]'>Start and explore a wide range of exciting travel experience.</span>
            <svg width="auto" height="auto" viewBox="0 0 370 278" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-0 left-0 bottom-0 top-0 z-0'>
               <path d="M2 277C11 256 138 282 211 180.5C284 79 277.5 9.5 369 2.5" stroke="#FFF8F5" stroke-width="4"/>
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About