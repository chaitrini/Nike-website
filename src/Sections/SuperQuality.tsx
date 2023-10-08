import Button from "../components/Button";
import arrow from '../assets/icons/arrow-right.svg'
import shoe from '../assets/images/shoe8.svg'

const SuperQuality = () => {
  return (
    <section id="about-us" className="mt-20 flex justify-between max-lg:flex-col gap-10 items-center 
    w-full max-container">
      <div className="ml-4 flex flex-col flex-1">
        <h2 className=" mt-10  font-bold  text-4xl font-palanquin max-lg:w-lg">
          <span className="xl-bg">We Provide </span><br />
          <span className="text-coral-red ">Super Quality </span>
          <span> Shoes</span>
        </h2>
        <p className="leading-7 mt-6  lg:max-w-lg font-montserrat text-lg text-slate-gray">
          Ensuring premium comfort and style our tremendous footwear is design to elevate your experinece,innovation for a active life</p>
        <p className="leading-7 font-palanquin text-lg text-slate-gray">Our dedication to Experience you life seemlessly</p>
        <div className="mt-10"><Button label="View details" arrow={arrow} /></div>
      
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe} alt='shoes' className="object-contain" width={570} height={502} />
      </div>
    </section>
  )
}
export default SuperQuality;