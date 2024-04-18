import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logowhite.png'
import {Link} from 'react-scroll'


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-[#FCFFFC]'>
      <div>
        <img src={Logo} alt='Logo image' style={{width: '50px'}} />
      </div>

      {/* Menu */}
        <ul className='hidden md:flex '>
          <li >
            <Link to="home" smooth={true} duration={500}>
              <a href="#" class="relative text-xl hover:text-[#66FCF1] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#66FCF1] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Home
              </a>
            </Link>
          </li>
          <li >
            <Link to="about" smooth={true} duration={500}>
              <a href="#" class="relative text-xl hover:text-[#66FCF1] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#66FCF1] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                About
              </a>
            </Link>
          </li>
          <li >
            <Link to="skills" smooth={true} duration={500}>
              <a href="#" class="relative text-xl hover:text-[#66FCF1] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#66FCF1] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Skills
              </a>
            </Link>
          </li>
          <li >
            <Link to="work" smooth={true} duration={500}>
              <a href="#" class="relative text-xl hover:text-[#66FCF1] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#66FCF1] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Work
              </a>
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#1F2833] to-[#0B0C10] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>


      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items center w-full text-gray-300'>
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a className='flex justify-between items center w-full text-gray-300'>
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#009e8e]'>
            <a className='flex justify-between items center w-full text-gray-300'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#49615c]'>
            <a className='flex justify-between items center w-full text-gray-300'>
              Contact <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>

      </div>


    </div>

  )
}

export default Navbar