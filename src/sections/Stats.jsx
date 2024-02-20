import CountUp from "react-countup"
import { data, variants } from "../utils"
import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";


const Stats = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]">
        <div className="container mx-auto">
            {/* grid */}
            <div className="grid lg:grid-cols-4 gap-12">
                {
                    data.stats.map(({start, end, statsInfo, border, direction}, i) => (
                        <motion.div
                        variants={variants.fadeIn(direction)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: true}}
                        className={`${border} text-center xl:border-accent`}>
                        <div className=' text-accent flex items-center justify-center'>
                            <h1 className="h1 text-accent">            
                        <CountUp
                        start={start}
                        end={end}
                        delay={0.5}
                        />
                         </h1>
                        <FaPlus />  
                        </div>
                        <p>
                            {statsInfo}
                        </p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Stats