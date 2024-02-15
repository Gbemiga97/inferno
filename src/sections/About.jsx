import { Button } from "../components"
import { images } from "../utils"
import {AiFillPhone} from 'react-icons/ai'


const About = () => {
  return (
    <section id="about" className="mt-[80px] xl:mt-[200px] relative z-20">
        <div className="container mx-auto xl:px-0">
            <div className="flex flex-col-reverse xl:flex-row text-center xl:text-left justify-between
            items-center gap-12 xl:gap-[74px]">

                {/* text & phone */}
                <div className="flex-1 max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
                    <h2 className="h2">
                    We Create The Art Of Stylish Living Stylishly
                    </h2>
                    <p>
                    It is a long established fact that a reader will be distracted by the of readable content of a page 
                    when looking at its layouts the points of using 
                    that it has a more-or-less normal.
                    </p>
                    {/* phone */}
                    <div className="flex gap-8 items-center justify-center xl:justify-start">
                        <div className="bg-accent/15 h-[93px] w-[93px] rounded-full flex items-center justify-center">
                            <AiFillPhone className="text-4xl text-accent" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-2xl">0987 654 321</p>
                            <p>Call us anytime</p>
                        </div>
                    </div>
                    {/* button */}
                    <Button />
                </div>

                {/* image */}
                <div className="max-w-[453px] mx-auto xl:max-w-none xl:mx-0">
                    <img src={images.AboutImg} alt="kitchen" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About