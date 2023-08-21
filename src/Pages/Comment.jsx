import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import Avatar from "../assets/avatar.png";

function Comment() {
  return (
    <div className="w-full bg-[#F7F8FC] flex flex-col gap-16 justify-center items-center pb-28'">
      <div className='w-width-1170 flex mt-28 mb-28 gap-7'>
        <div className="flex flex-col p-3">
          <span className="font-Volkhov text-PrimaryB font-bold text-5xl leading-[56px]">What people say <span className='text-PrimaryO'>about Us.</span></span>
          <span className="font-[Roboto] text-base leading-8 text-Paragraph">Our Clients send us bunch of smilies with our services and we love them.</span>
          <div className="flex gap-5 mt-4">
            <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center  text-2xl"><FiArrowLeft /></button>
            <button className="bg-PrimaryO text-white w-10 h-10 rounded-full flex items-center justify-center  text-2xl"><FiArrowRight /></button>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white flex flex-col p-[34px] relative rounded-[10px] w-[500px] mr-[150px] shadow-comment">
            <img src={Avatar} className="w-[68px] h-[68px] rounded-full absolute -top-9 -left-8"/>
            <span className="font-Poppins text-[#444] text-base font-medium leading-8 ">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</span>
            <span className="font-Poppins text-PrimaryB text-lg font-semibold mt-[34px]">Mike taylor</span>
            <span className="font-Poppins text-Paragraph text-sm font-medium mt-[5px]">Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment