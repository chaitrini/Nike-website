import '../index.css'
import customer1 from '../assets/images/customer1.jpeg';
import customer2 from '../assets/images/customer2.svg';
import ReviewCard from '../components/ReviewCard';

interface rev{
  imgURL: string,
  customerName: string,
  rating: string,
  feedback:string,
  
}

const CustomerReviews = () => {
  const reviews:rev[] = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: '4.5',
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: '4.5',
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];
  return (
    <section className="max-container mt-4 ml-4 justify-center items-center flex">
      <div>
        <h3 className='font-palanquin font-bold text-4xl'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
        <p className='info-text mt-4 m-auto max-w-lg text-center'>Here genuenie stories from our customer of ther exceptional experinece
          from there life using our products</p>
        <div className='flex justify-evenly flex-1 mt-24 items-center flex-col '>
          {reviews.map((review:rev) => (
            <ReviewCard key={review.imgURL} {...review} />
          ))}

        </div>
      </div>
  </section>)
}
export default CustomerReviews