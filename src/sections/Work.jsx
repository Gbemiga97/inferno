import { FiChevronRight } from "react-icons/fi"
import { data } from "../utils"

const Work = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
        <div className="container mx-auto xl:px-0">
            {/* title */}
            <div className="text-center mb-24">
                <h2 className="h2 mb-4">
                    Follow Our Projects</h2>
                <p className="max-w-3xl mx-auto">
                It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
                </p>
            </div>
            {/* grid */}
            <div className="grid xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
                {
                    data.work.map(({img, title, subTitle}, i) => (
                 <div key={i} className="w-full max-w-[548px] h-full mx-auto">
                        <img src={img} alt="work" />
                        <div className="flex justify-between items-center w-full mt-6">
                            <div>
                            <h3>
                                {title}
                            </h3>
                            <p>{subTitle}</p>
                            </div>
                            <button className="bg-accent-secondary h-[70px] w-[70px] rounded-full hover:bg-accent/20 
                            transition-all duration-300 flex items-center justify-center  ">
                                <FiChevronRight className="text-3xl text-primary pl-1" />
                            </button>
                        </div>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work