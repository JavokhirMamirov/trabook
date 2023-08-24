import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"


function Footer() {
  return (
    <div className="flex w-full bg-[#F7F8FC] justify-center items-center">
      <div className="w-width-1170 flex flex-col mt-[350px] mb-12 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="font-Volkhov text-PrimaryB text-2xl font-bold">Trabook</span>
            <p className="font-Poppins text-Paragraph text-base font-medium pr-[150px]">Book your trip in minute, get full Control for much longer.</p>
            <div className="flex gap-6 basis-[40%]">
              <button><FaTwitter/></button>
              <button><FaInstagram/></button>
              <button><FaFacebookF/></button>
            </div>
          </div>
          <div className="flex flex-col basis-[20%] font-Poppins text-Paragraph text-lg font-normal">
            <span className="font-Volkhov text-PrimaryB text-lg font-semibold">Company</span>
            <span>About</span>
            <span>Careers</span>
            <span>Logistic</span>
            <span>Privacy & Policy</span>
          </div>
          <div className="flex flex-col basis-[20%]  font-Poppins text-Paragraph text-lg font-normal">
            <span className="font-Volkhov text-PrimaryB text-lg font-semibold">Contact</span>
            <span>Help/FAQ</span>
            <span>Press</span>
            <span>Affilates</span>
          </div>
          <div className="flex flex-col basis-[20%]  font-Poppins text-Paragraph text-lg font-normal">
            <span className="font-Volkhov text-PrimaryB text-lg font-semibold">More</span>
            <span>Press Centre</span>
            <span>Our Blog</span>
            <span>Logistic</span>
            <span>Low fare tips</span>
          </div>
        </div>
        <div className="border-t border-[#9999998F] flex pt-10 justify-between">
          <span className="font-Poppins text-Paragraph text-base font-normal">Copyright, Trabook 2023. All rights reserved.</span>
          <span className="font-Poppins text-Paragraph text-base font-normal">Terms & Conditions</span>
        </div>
      </div>
    </div>
  )
}

export default Footer