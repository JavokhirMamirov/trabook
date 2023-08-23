import { FiMail } from "react-icons/fi"
import PalmaSvg from "../assets/palma.svg";
import LoopSvg from "../assets/loop.svg";
function Form() {
  return (
    <div className='w-full flex relative justify-center'>
        <div className="flex w-width-1170 justify-center absolute bg-PrimaryO rounded-2xl flex-col items-center gap-16 py-20 z-[0] top-[-200px]">
            <img src={PalmaSvg}  className="absolute top-1 right-1"/>
            <img src={LoopSvg}  className="absolute bottom-0 left-0 z-[-1]"/>
            <span className="font-Volkhov text-5xl font-bold text-white max-w-[700px] text-center leading-normal">Subscribe and get exclusive deals & offer</span>
            <div className="flex rounded-[10px] bg-white pl-5 pr-2 items-center text-lg text-[#999999]  max-w-[670px] w-full">
                <FiMail className="text-xl"/>
                <input className="outline-none border-0 ml-1 w-full" placeholder="Enter your mail"/>
                <button className="ml-auto inline-flex px-[26px] py-[13px] justify-center items-center rounded-lg bg-PrimaryO font-Poppins text-base font-normal text-white mt-[9px] mb-[9px]">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Form