import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import Carousel from 'react-spring-3d-carousel';
import { useState } from "react";
import { config } from "react-spring";
import CommentCard from "../Components/CommentCard";
import { v4 as uuidv4 } from "uuid";

const Slides = [
  {
    key:uuidv4(),
    content:<CommentCard />,
  },
  {
    key:uuidv4(),
    content:<CommentCard />,
  },
  {
    key:uuidv4(),
    content:<CommentCard />,
  },
]

function Comment() {
  const table = Slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [offsetRadius] = useState(2);
  const [showArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  return (
    <div className="w-full bg-[#F7F8FC] flex flex-col gap-16 justify-center items-center pb-28'">
      <div className='w-width-1170 flex mt-28 mb-28 gap-7'>
        <div className="flex flex-col p-3">
          <span className="font-Volkhov text-PrimaryB font-bold text-5xl leading-[56px]">What people say <span className='text-PrimaryO'>about Us.</span></span>
          <span className="font-[Roboto] text-base leading-8 text-Paragraph">Our Clients send us bunch of smilies with our services and we love them.</span>
          <div className="flex gap-5 mt-4">
            <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center  text-2xl" onClick={()=>setGoToSlide(goToSlide-1 >= 0? goToSlide - 1: cards.length-1)}><FiArrowLeft /></button>
            <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center  text-2xl"  onClick={()=>setGoToSlide(goToSlide+1 < cards.length? goToSlide + 1: 0)}><FiArrowRight /></button>
          </div>
        </div>
        <div className="flex relative w-full">
          <Carousel slides={cards} offsetRadius={offsetRadius} goToSlide={goToSlide} showArrows={showArrows} animationConfig={config.gentle}/>
        </div>
      </div>
    </div>
  )
}

export default Comment