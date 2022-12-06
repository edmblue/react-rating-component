import illustration from '../assets/illustration-thank-you.svg';

const BackPage = ({ score }) => {
  return (
    <div className="component bg-darkBlue p-7 rounded-3xl w-[26rem] flex flex-col gap-y-5 text-center">
      <div>
        <img
          className="mx-auto"
          src={illustration}
          alt="illustration for thank you"
        />
      </div>
      <div>
        <p className="inline-block text-orange bg-basicGrey rounded-full py-1 px-5">
          You selected {score} out of 5
        </p>
      </div>
      <div>
        <p className="text-white text-2xl mb-3">Thank you!</p>
        <p className="text-mediumGrey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch
        </p>
      </div>
    </div>
  );
};

export default BackPage;
