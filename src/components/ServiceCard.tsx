interface serv{
  imgURL: string,
  label: string,
  subtext:string
}

const ServiceCard = ({imgURL,label,subtext }:serv) => {
  return (
    <div className="flex-1 sm:w-[350px] justify-between sm:min-w-[350px] w-6 rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex w-11 h-11  justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt='service' width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">{label}</h3>
         <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}
export default ServiceCard;