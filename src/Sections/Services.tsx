import { truckFast, shieldTick, support } from '../assets/icons';
import ServiceCard from '../components/ServiceCard'
import '../index.css'

interface serv{
  imgURL: string,
  label: string,
  subtext:string
}

const Services = () => {
  const services:serv[] = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

  return (
    <section className="max-container mt-10 ml-4 flex flex-wrap justify-center gap-9">
        {services.map((card) => (
          <ServiceCard key={card.label} {...card} />
        ))}
    </section>
  )
}

export default Services;