import CountUp from "react-countup"
import { data } from "../utils"
import { FaPlus } from "react-icons/fa6";

const Stats = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]">
        <div className="container mx-auto">
            {/* grid */}
            <div className="grid lg:grid-cols-4 gap-12">
                {
                    data.stats.map(({start, end, statsInfo, border}, i) => (
                        <div className={`${border} text-center xl:border-accent`}>
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
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Stats