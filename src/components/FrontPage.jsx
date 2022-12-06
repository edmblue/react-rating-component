import iconStar from '../assets/icon-star.svg';
import Rating from './Rating';

const FrontPage = ({ setScore, setSubmitted }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="component bg-darkBlue p-7 rounded-3xl w-[26rem]">
      <div className="icon p-3 bg-basicGrey inline-block rounded-full">
        <img src={iconStar} alt="icon star" />
      </div>
      <h2 className="text-white text-2xl font-bold mt-3">How did we do?</h2>
      <p className="mt-3 text-lightGrey">
        Please let us know how we did with your support request, All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <div className="rating flex justify-between mt-6">
          {[1, 2, 3, 4, 5].map((ratingNumber, i) => (
            <Rating key={i} ratingNumber={ratingNumber} setScore={setScore} />
          ))}
        </div>
        <input
          onClick={handleSubmit}
          className="bg-orange uppercase font-bold text-white w-full mt-7 py-3 rounded-full cursor-pointer hover:bg-white hover:text-orange"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default FrontPage;
