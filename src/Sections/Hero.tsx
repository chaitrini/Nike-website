import Button from "../components/Button";
import arrow from '../assets/icons/arrow-right.svg'
//import bigshoe1 from '../assets/images/big-shoe1.png'
import { bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from
  "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";


interface stats{
  value: string,
  label: string,
  
}
interface sho{
  thumbnail: string,
   bigShoe: string,
}



const Hero = () => {
  const[bigShoeImg,setBigShoeImg]= useState<string>(bigShoe1)
  const statistics:stats[] = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
  ];
  const shoes:sho[] = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

  return (
    <section className="ml-3 w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10  max-container">
      <div className=" relative xl:w-2/5 flex flex-col items-start justify-center w-full max-xl:padding x pt-28">
        <p className="text-xl font-montserrat">Our Summer collection</p>
        <h1 className=" mt-10 max-sm:text-[72px] font-bold max-sm:leading-[82px] text-8xl font-palanquin">
          <span className="xl-bg">The New Arrival</span><br />
          <span className="text-coral-red inline-block mt-3">Nike </span>
          <span> Shoes</span>
        </h1>
        <p className="leading-8 mt-6 mb-14 sm:max-w-sm font-montserrat text-lg text-slate-grey">Discover stylish Nike arrivals,quality,comfort and innovation for a active life</p>
        <Button label="Show now" arrow={arrow} />
        <div className="flex justify-start items-start w-full flex-wrap mt-20 gap-16" >
          {statistics.map((item: stats) => (
            <div>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="font-montserrat text-slate-grey leading-7">{item.label}</p>
              </div>
          ))} 
        </div>
    </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="Show collection" width={610} height={500} className='object-contain relative z-10' />
      
      <div className="flex  sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
        {shoes.map((shoe:sho) => (
          <div><ShoeCard imgUrl={shoe} changeBigShoe={(shoe) => {  setBigShoeImg(shoe.bigShoe) }} 
          bigShoeImg={bigShoeImg} /> </div>
        ))}
        </div>
        </div>
    </section>

  )
}

export default Hero;