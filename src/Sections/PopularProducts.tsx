import { shoe4, shoe5, shoe6, shoe7 } from '../assets/images';
import ProductsCard from '../components/ProductsCard';
interface Prod {
  imgURL: string,
  name: string,
  price:string,
}



const PopularProducts = () => {
  const products:Prod[] = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];
  return (
    <section id="Products">
      <div className='flex flex-col gap-4 mt-10 ml-4 max-sm:mt-16'>
        <h1 className='text-4xl font-bold font-palanquin mt-4'>Our <span className='text-coral-red'>Popular</span> Products</h1>
        <p className='text-slate-gray  mt-2 font-montserrat'>Our popular products with much comfort and quality and style.
          Experience top notch collection with our sought after collections.
          Discover a world of comfort design and valule</p>
      </div>
      <div className=' mt-16 ml-4 overflow-x-hidden grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 
      xl:grid-cols-4 sm:gap-4 gap-14'>
        {products.map((product: Prod) => (
          <ProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}
export default PopularProducts;