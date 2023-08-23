import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"


function Footer() {
  return (
    <div className="flex w-full bg-[#F7F8FC] justify-center items-center">
      <div className="w-width-1170 flex flex-col mt-[350px] mb-12">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span>Trabook</span>
            <p>Book your trip in minute, get full Control for much longer.</p>
            <div>
              <button><FaTwitter/></button>
              <button><FaInstagram/></button>
              <button><FaFacebookF/></button>
            </div>
          </div>
          <div>
            <span>Company</span>
            <span>About</span>
            <span>Careers</span>
            <span>Logistic</span>
            <span>Privacy & Policy</span>
          </div>
          <div>
            <span>Contact</span>
            <span>Help/FAQ</span>
            <span>Press</span>
            <span>Affilates</span>
          </div>
          <div>
            <span>More</span>
            <span>Press Centre</span>
            <span>Our Blog</span>
            <span>Logistic</span>
            <span>Low fare tips</span>
          </div>
        </div>
        <div>
          <span>Copyright, Trabook 2022. All rights reserved.</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  )
}

export default Footer