import { TestimonialSlider } from "../components"

const Testimonial = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px relative z-20]">
        <div className="container mx-auto bg-accent-secondary rounded-[70px] px-6">
            <div className="flex flex-col items-center pt-[88px] pb-[110px]">
                <h2 className="h2 mb-9 text-center">
                    What clients say
                </h2>
                <div className="w-full">
                    <TestimonialSlider />
                </div>
             </div>            
        </div>
    </section>
  )
}

export default Testimonial