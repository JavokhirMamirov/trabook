import Logo from '../assets/logo.svg'
function Navbar() {
  return (
    <div className='w-width-1170 flex items-center justify-between h-28'>
        <div className='flex items-center gap-2'>
            <span className='text-PrimaryB font-Volkhov text-2xl font-bold'>Trabook</span>
            <img className='h-5 w-5' src={Logo}/>
        </div>
        <ul className='flex gap-5 items-center text-PrimaryB font-Poppins text-base font-normal'>
            <li className='cursor-pointer'>
                <a href="#">Home</a>
            </li>
            <li className='cursor-pointer'>
                <a href="#">About</a>
            </li>
            <li className='cursor-pointer'>
                <a href="#">Destination</a>
            </li>
            <li className='cursor-pointer'>
                <a href="#">Tour</a>
            </li>
            <li className='cursor-pointer'>
                <a href="#">Blog</a>
            </li>
        </ul>
        <div className='flex items-center gap-5'>
            <button className='cursor-pointer text-PrimaryO font-Poppins text-base font-semibold'>Login</button>
            <button className='cursor-pointer bg-[#FA7436] w-[160px] h-[50px] text-white font-Poppins text-base font-semibold rounded-md shadow-md shadow-[#FA7436]'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar