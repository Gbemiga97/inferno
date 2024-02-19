import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"
import { images } from "../utils"

const Footer = () => {
  return (
    <footer className="mt-[80px] xl:mt-[150px] relative z-20">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
                <div className="w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
                {/* logo */}
                <a href="/" className="flex justify-center xl:justify-start mb-8">
                <img src={images.Logo} alt="logo" />
                </a>
                <p className="mb-8 text-xl">
                    It is along established fact that a reader will be distracted looking
                </p>
                {/* socials */}
                <ul className="text-primary flex gap-[54px] justify-center xl:justify-start">
                    <li>
                        <a href="/">
                            <FiFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FiTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FiLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <FiInstagram />
                        </a>
                    </li>
                </ul>
                </div>
                <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px]
                xl:justify-end">
                    {/* pages */}
                <div>
                    <h3 className="h3 mb-3">Pages</h3>
                 <ul className="flex flex-col gap-4">
                        <li><a href="about">About US</a></li>
                        <li><a href="testimonials">Testimonials</a></li>
                        <li><a href="work">Our Work</a></li>
                        <li><a href="news">News</a></li>
                        <li><a href="contact">contact</a></li>
                    </ul>
                </div>
                     {/* services */}
                     <div>
                    <h3 className="h3 mb-3">Services</h3>
                 <ul className="flex flex-col gap-4">
                        <li><a href="/">Kitchen</a></li>
                        <li><a href="/">Living Area</a></li>
                        <li><a href="/">Bathroom</a></li>
                        <li><a href="/">Bedroom</a></li>
                    </ul>
                </div>

                {/* contact */}
                <div className="mx-auto max-w-[260px] xl:mx-0">
                    <h3 className="h3 mb-3">Contact</h3>
                  <div className="flex flex-col gap-6 text-[20px]">
                  <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                    <p>contact@interno.com</p>
                    <p>(123) 456 - 7890</p>
                  </div>
                </div>
                </div>
            </div>
        </div>
        {/* copyright */}
        <p className="text-lg text-center py-10 bg-white xl:border-t">
            Copyright &copy; Inferno {new Date().getFullYear()}. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer