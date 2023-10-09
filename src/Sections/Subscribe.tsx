import Button from "../components/Button";
import arrow from '../assets/icons/arrow-right.svg'

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between flex-col items-center max-lg:flex-col gap-10" id="contact-us">
      
        <h1 className="text-4xl leading-[68px]  font-palanquin font-bold">Sign Up for <span className="text-coral-red">Updates </span> and Newsletters</h1>
      <div className="max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" />
        <div className="flex max-sm:justify-end max-sm:w-full items-center">
          <Button label="SignUp" arrow={arrow} />
        </div>
      </div>
  </section>)
}

export default Subscribe;