interface props{
  label: string,
  arrow: string,
}


const Button = ({ label, arrow }: props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">
      {label}
      <img className="rounded-full w-5 h-5 ml-2" src={arrow} alt="arrow" ></img>
    </button>)
}

export default Button;