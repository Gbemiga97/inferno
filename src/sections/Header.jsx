import { Link } from "react-scroll"
import {  images } from "../utils"
import { Nav } from "../components"
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
    const [showNav, setShowNav] = useState(false)

  return (
    <header className="sticky h-[90px] bg-white shadow-xl top-0 z-30">
        <div className="container mx-auto flex justify-between items-center h-full">
            <Link>
            <img src={images.Logo} alt="logo" />
            </Link>
            <Nav showNav={showNav}/>
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