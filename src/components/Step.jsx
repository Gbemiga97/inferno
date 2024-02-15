import { FaArrowRight } from "react-icons/fa6"




const Step = ({step}) => {
    const {icon, title, desc} = step
  return (
    <div  className="flex flex-col justify-center items-center text-center">
                            <div className="mb-4 text-5xl text-accent">
                                {icon}
                            </div>
                            <h3 className="h3 mb-4">
                                {title}
                            </h3>
                            <p className="mb-5 max-w-md mx-auto">
                                {desc}
                            </p>
                            <a href="#" className="flex justify-center gap-2 font-medium items-center">
                                Read more
                                <FaArrowRight className="text-accent" />
                            </a>
                        </div>
  )
}

export default Step