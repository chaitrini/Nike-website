import Button from "../components/Button";
import arrow from '../assets/icons/arrow-right.svg'
import offer from '../assets/images/offer.svg'
import '../index.css'

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 ml-4 mt-8 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
    </div>
      <div className=" flex flex-col flex-1">
        <h2 className=" mt-10  font-bold  text-4xl font-palanquin max-lg:w-lg">
          <span className="text-coral-red ">Special </span>
          <span className="xl-bg">Offer </span><br />
          
        </h2>
        <p className="leading-7 mt-6  lg:max-w-lg font-montserrat text-lg text-slate-gray">
          Ensuring premium comfort and style our tremendous footwear is design to elevate your experinece,innovation for a active life</p>
        <p className="leading-7 font-palanquin text-lg text-slate-gray">Our dedication to Experience you life seemlessly</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Shop now" arrow={arrow} />
          <button className="flex justify-center items-center gap-2 px-7 py-4 
          font-montserrat text-lg leading-none bg-white text-slate-gray border-slate-gray ">
      Learn more
    </button>
        </div>
        </div>
    
    </section>
  )
}

export default SpecialOffers;