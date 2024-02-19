import { FaArrowRight, } from "react-icons/fa6"

const Contact = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
        <div className="container mx-auto bg-primary sm:rounded-[70px] py-[80px]">
            <div className="max-w-[640px] mx-auto text-center">
                <h2 className="h2 text-white mb-4">
                    Do you want to join Interno
                </h2>
                <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
                    It is a long established fact that will be distracted
                </p>
                <button className="btn btn-accent mx-auto">
                    Connect with us <FaArrowRight className="text-primary"  />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Contact