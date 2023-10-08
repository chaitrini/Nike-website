interface props{
  imgUrl: sho,
  changeBigShoe: (shoe:sho)=> void,
  bigShoeImg:string,
}
interface sho{
  thumbnail: string,
   bigShoe: string,
}

const ShoeCard = ({ imgUrl, changeBigShoe, bigShoeImg }: props) => {
  const   handleShoe = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
        changeBigShoe(imgUrl)
      }
  }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe? 'border-coral-red' : 
    'border-trasparent'} cursor-pointer max-sm:flex-1`} onClick={handleShoe}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 
      rounded-xl p-4">
        <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain"/>
      </div>
    </div>
  )
}
export default ShoeCard;