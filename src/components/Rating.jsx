const Rating = ({ ratingNumber, setScore }) => {
  return (
    <div
      onClick={() => setScore(ratingNumber)}
      className="text-lightGrey font-bold bg-basicGrey w-[3.5rem] h-[3.5rem] flex items-center justify-center p-6 pt-[1.8rem] rounded-full cursor-pointer hover:bg-orange hover:text-white focus-within:bg-lightGrey focus-within:text-white"
      tabIndex="-1"
    >
      <p>{ratingNumber}</p>
    </div>
  );
};

export default Rating;
