import {star} from '../assets/icons/'

interface Prod {
  imgURL: string,
  name: string,
  price:string,
}

const ProductsCard = ({imgURL,name,price}:Prod) => {
  return (
    <div className="flexflex-col w-full flex-1 max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt='rating' />
        <p className='text-xl text-slate-gray font-montserrat leading-normal'>(4.5)</p>
      </div>
      <h1 className='font-semibold font-palanquin leading-normal m-2 ml-0'>{name}</h1>
      <p className='text-coral-red font-montserrat'>{price}</p>
    </div>
  )
}
export default ProductsCard;