import {BlogData} from "../Constants/Constants";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ItemsCarousel from 'react-items-carousel';
import { useState } from "react";

function Blog() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const NextButton = () => (
    <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center absolute text-2xl bottom-[-70px] left-1/2 mr-4"><FiArrowRight /></button>
  )
  const PrevButton = () => (
    <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center absolute text-2xl bottom-[-70px] right-1/2 mr-4"><FiArrowLeft /></button>
  )
  
  
  return (
    <div className='w-full bg-[#FEFCFB] flex flex-col gap-16 justify-center items-center'>
      <div className='w-width-1170 flex flex-col mt-28 mb-[350px]'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <span className='font-Volkhov text-PrimaryB font-bold text-5xl relative'>Get update with <span className='text-PrimaryO'>latest blog</span></span>
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
            {BlogData?.map((data, index)=>(
                <div className='flex flex-col relative cursor-pointer group hover:shadow-card-d'  key={index}>
                  <img src={data.img} className='rounded-lg h-[270px] object-cover'/>
                  <div className='border-2 border-t-0 border-[rgba(102, 102, 102, 0.08)] mt-[-3px] rounded-b-lg flex flex-col'>
                    <div className='flex justify-between flex-col p-4 mt-8 gap-2' >
                      <span className='font-Poppins text-PrimaryB text-lg font-medium'>{data.title}</span>
                      <span className='font-sans text-[#999] text-base font-normal'>{data.date}</span>
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

export default Blog