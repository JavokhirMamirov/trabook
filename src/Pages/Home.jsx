import Navbar from "../Components/Navbar"
import HomePng from "../assets/home.png";
function Home() {
  return (
    <div className="flex w-full flex-col pb-16 items-center bg-[#FEFCFB]">
        <Navbar />
        <div className="flex w-width-1170 mt-4 gap-4 items-center">
            <div className="flex flex-col gap-1 grow">
                <span className="text-PrimaryB font-Volkhov text-6xl font-bold">Get started your exciting <span className="text-PrimaryO">journey</span> with us.</span>
                <span className="font-Poppins text-xl font-normal text-Paragraph mt-2">A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </span>
                <button className="flex bg-white border-PrimaryO rounded-[5px] border py-[14px] px-[28px] mt-16 items-center justify-center w-[180px] font-Poppins font-medium text-PrimaryO text-lg">Discover Now</button>
            </div>
            <img src={HomePng} className="w-[650px]" alt="Home" />
        </div>
        <div className="flex bg-white rounded-xl mt-14 shadow-3xl px-4 py-6 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-PrimaryB text-base font-medium font-Poppins">Location</span>
            <span className="text-Paragraph text-[12px] font-normal font-Poppins">Where are you going</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-PrimaryB text-base font-medium font-Poppins">Date</span>
            <span className="text-Paragraph text-[12px] font-normal font-Poppins">When you will go</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-PrimaryB text-base font-medium font-Poppins">Guest</span>
            <span className="text-Paragraph text-[12px] font-normal font-Poppins">Number of guest</span>
          </div>
          <button className='cursor-pointer bg-[#FA7436] py-[14px] px-[28px] text-white font-Poppins text-base font-semibold rounded-[5px] shadow-md shadow-[#FA7436]'>Explore Now</button>
        </div>
    </div>
  )
}

export default Home