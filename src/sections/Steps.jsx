import { data } from "../utils"
import { Step } from "../components"

const Steps = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
        <div className="container mx-auto">
            {/* steps grid  */}
            <div className="grid xl:grid-cols-3 gap-12">
                {
                    data.steps.map((step, i) => (
                        <Step step={step} key={i} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Steps