import { TestimonialSlider } from "../components"
import { motion } from "framer-motion"
import { variants } from "../utils"


const Testimonial = () => {
  return (
    <section id="testimonials" className="mt-[80px] xl:mt-[200px relative z-20]">
        <motion.div
        variants={variants.fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true}}
        className="container mx-auto bg-accent-secondary rounded-[70px] px-6">
            <div className="flex flex-col items-center pt-[88px] pb-[110px]">
                <h2 className="h2 mb-9 text-center">
                    What clients say
                </h2>
                <motion.div 
                variants={variants.fadeIn('left')}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: true}}
                className="w-full">
                    <TestimonialSlider />
                </motion.div>
             </div>            
        </motion.div>
    </section>
  )
}

export default Testimonial