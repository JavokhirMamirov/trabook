import {TourData} from "../Constants/Constants";
import { FiArrowLeft, FiArrowRight, FiNavigation } from "react-icons/fi";
import { FaStar} from "react-icons/fa";
import ItemsCarousel from 'react-items-carousel';
import { useState } from "react";
import PalmaPNg from "../assets/palma.png";

function Tour() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const NextButton = () => (
    <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center absolute text-2xl top-[-60px] right-0 mr-4"><FiArrowRight /></button>
  )
  const PrevButton = () => (
    <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center absolute text-2xl top-[-60px] right-14 mr-4"><FiArrowLeft /></button>
  )
  
  return (
    <div className='w-full bg-[#FEFCFB] flex flex-col gap-16 justify-center items-center pb-28'>
      <div className='w-width-1170 flex flex-col mt-28'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <span className='font-Volkhov text-PrimaryB font-bold text-5xl relative'>Best <span className='text-PrimaryO'>vocation plan</span>
          <img src={PalmaPNg}  className="absolute -right-40 top-0"/>
          </span>
          <span className='max-w-[433px] text-[18px] font-Poppins text-Paragraph text-center'>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </span>
        </div>
        <div className='mt-[66px] relative'>
            <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
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
            {TourData?.map((data, index)=>(
                <div className='flex flex-col relative cursor-pointer group hover:shadow-card-d'  key={index}>
                  <img src={data.img} className='rounded-lg h-[327px] object-cover'/>
                  <div className='absolute top-0 left-0 right-0 h-[327px] bg-black bg-opacity-40 justify-center items-end hidden group-hover:flex transition-all'>
                    <button className='bg-PrimaryO px-5 py-2 rounded-lg text-white font-Poppins text-lg font-medium mb-14'>Book now</button>
                  </div>
                  <div className='border-2 border-t-0 border-[rgba(102, 102, 102, 0.08)] mt-[-3px] rounded-b-lg flex flex-col'>
                    <div className='flex justify-between p-4 mt-8 items-center' >
                      <span className='font-Poppins text-PrimaryB text-2xl font-medium'>{data.title}</span>
                      <span className='px-[5px] py-[2px] bg-[#FFE7DB] ] font-Poppins text-PrimaryO text-base font-semibold rounded-lg'>{data.price}</span>
                    </div>
                    <div className='flex justify-between items-center p-4 pt-0'>
                      <span className='flex items-center font-Poppins text-Paragraph text-base font-normal'><FiNavigation className='mr-1 text-PrimaryO'/> {data.days}</span>
                      <span className='flex items-center font-Poppins text-Paragraph text-base font-normal'><FaStar className='mr-1 text-yellow-500'/> {data.price}</span>

                      
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

export default Tour