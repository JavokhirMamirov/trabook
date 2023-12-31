import {DestData} from "../Constants/Constants";
import { FiArrowLeft, FiArrowRight, FiMapPin } from "react-icons/fi";
import { FaStar} from "react-icons/fa";
import ItemsCarousel from 'react-items-carousel';
import { useState } from "react";

function Destination() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const NextButton = () => (
    <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center absolute text-2xl bottom-[-70px] left-1/2 mr-4"><FiArrowRight /></button>
  )
  const PrevButton = () => (
    <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center absolute text-2xl bottom-[-70px] right-1/2 mr-4"><FiArrowLeft /></button>
  )
  
  
  return (
    <div className='w-full bg-[#FEFCFB] flex flex-col gap-16 justify-center items-center pb-28'>
      <div className='w-width-1170 flex flex-col mt-28'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <span className='font-Volkhov text-PrimaryB font-bold text-5xl'>Exclusive <span className='text-PrimaryO'>deals & discounts</span></span>
          <span className='max-w-[433px] text-[18px] font-Poppins text-Paragraph text-center'>Discover our fantastic early booking discounts & start planning your journey.</span>
        </div>
        <div className='mt-[66px] relative'>
          <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          alwaysShowChevrons={true}
          leftChevron={<PrevButton />}
          rightChevron={<NextButton />}
          disableSwipe={true}
          classes={{
            rightChevronWrapper:"right-wrapper",
            leftChevronWrapper:"right-wrapper"
          }
          }
          >
          {DestData?.map((data, index)=>(
              <div className='flex flex-col relative cursor-pointer group hover:shadow-card-d'  key={index}>
                <img src={data.img} className='rounded-lg h-[270px] object-cover'/>
                <div className='absolute top-0 left-0 right-0 h-[270px] bg-black bg-opacity-40 justify-center items-end hidden group-hover:flex transition-all'>
                  <button className='bg-PrimaryO px-5 py-2 rounded-lg text-white font-Poppins text-lg font-medium mb-14'>Book now</button>
                </div>
                <div className='border-2 border-t-0 border-[rgba(102, 102, 102, 0.08)] mt-[-3px] rounded-b-lg flex flex-col'>
                  <div className='flex justify-between p-4 mt-8 items-center' >
                    <span className='font-Poppins text-PrimaryB text-2xl font-medium'>{data.city}</span>
                    <span className='flex items-center font-Poppins text-Paragraph text-base font-normal'><FaStar className='mr-1 text-yellow-500'/> {data.raiting}</span>
                  </div>
                  <div className='flex justify-between items-center p-4 pt-0'>
                    <span className='flex items-center font-Poppins text-Paragraph text-base font-normal'><FiMapPin className='mr-1 text-[#999]'/> {data.country}</span>
                    <del className='ml-auto text-[#999] mr-5 font-Poppins text-Paragraph text-base font-normal'>{data.dis_price}</del>
                    <span className='px-[5px] py-[2px] bg-[#FFE7DB] ] font-Poppins text-PrimaryO text-base font-semibold rounded-lg'>{data.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </ItemsCarousel>
        </div>
      </div>
    </div>
  )
}

export default Destination