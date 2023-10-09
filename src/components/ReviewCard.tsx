import { star } from '../assets/icons';
import '../index.css'

interface rev{
  imgURL: string,
  customerName: string,
  rating: string,
  feedback:string,
  
}


const ReviewCard = ({imgURL,customerName,rating,feedback}:rev) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <img src={imgURL} alt='customer' className="object-cover rounded-full w-[120px] h-[120px" />
      <p className='text-center mt-6 max-w-sm info-text'>{feedback}</p>
      <div className='flex flex-row justify-between items-center mt-3 gap-2.5 '>
      <img src={star} alt='star' width={24} height={24} className='object-contain m-0' ></img>
        <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
        </div>
      <h3 className='mt-1 mb-3 text-3xl font-palanquin font-bold text-center'>{customerName}</h3>
    </div>
 )
}
export default ReviewCard;
