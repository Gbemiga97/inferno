import { images } from "../utils"

const Brands = () => {
  return (
    <div className="mt-[80px] xl:mt-[150px] relative z-20">
    <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-12 ">
            <img src={images.Brand1} alt="Brand1" />
            <img src={images.Brand2} alt="Brand2" />
            <img src={images.Brand3} alt="Brand3" />
            <img src={images.Brand4} alt="Brand4" />
            <img src={images.Brand5} alt="Brand5" />
        </div>
    </div>
    </div>
  )
}

export default Brands