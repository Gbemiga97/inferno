import { FiChevronRight } from "react-icons/fi"
import { data } from "../utils"

const News = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
        <div className="container mx-auto px-0">
            {/* text  */}
            <div className="max-w-[810px] mx-auto text-center mb-[52px]">
                <h2 className="h2 mb-4">
                 Articles & News
                </h2>
                <p>
                It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using.
                </p>
            </div>
            {/* grid */}
            <div className="grid xl:grid-cols-3 gap-[27px]">
                {
                    data.news.map(({img, title, date}, i) => (
                        <div
                        className="w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px]
                        p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0"
                        key={i}>
                            <img src={img} alt={title} />
                            <div className="flex mt-5 flex-col gap-[30px]">
                                <h3>
                                    {title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-base">
                                        {date}
                                    </p>
                                    <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full
                                     group-hover:bg-white transition-all flex items-center justify-center pl-1">
                                        <FiChevronRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default News