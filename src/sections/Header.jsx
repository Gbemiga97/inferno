import { Link } from "react-scroll"
import {  images } from "../utils"
import { Nav } from "../components"
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const [header, setHeader] = useState(false)


    useEffect(() => {
      const handleScroll = () => {
        setHeader(window.scrollY > 80)
      }
      window.addEventListener('scroll', handleScroll)

      return () =>  window.removeEventListener('scroll', handleScroll)


    })


  return (
    <header className={`${header ? 'bg-white shadow-xl' : 'bg-transparent'}
    fixed h-[90px]    top-0 z-30 right-0 left-0 transition-all duration-300`}>
        <div className="container mx-auto flex justify-between items-center h-full">
            <Link spy={true} smooth={true} to="/" onClick={() => setShowNav(false)} className="cursor-pointer">
            <img src={images.Logo} alt="logo" />
            </Link>
            <Nav showNav={showNav} setShowNav={setShowNav} />
            <button
            onClick={() => setShowNav(prev => !prev)}
            className="text-4xl lg:hidden">
                <RiMenu4Fill  />
            </button>
        </div>
    </header>
  )
}

export default Header