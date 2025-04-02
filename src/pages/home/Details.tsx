import googleplay from "../../assets/googleplay.png";
import sebaDetails from "../../assets/sebaDetails.png";

const Details = () => {
  return (
    <div className="pt-20 flex flex-col md:flex-row items-center justify-between md:gap-24 gap-0 w-full h-full pb-8 px-4 md:px-12 lg:px-20">
      {/* Left side content text */}
      <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
        <h2 className="font-bold text-2xl md:text-3xl">Download the Sebaghar Video Consultancy App!</h2>
        <p className="text-lg pt-2">
          There are two types of apps currently available, one for patients and another for doctors. Both apps are built for Android. Very soon, we are coming with iOS.
        </p>
        <div className="pt-6">
          <label className="font-semibold text-lg">Get early access</label>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 pt-2">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full md:w-2/3 px-3 py-2 border bg-gray-200 focus:outline-none"
            />
            <button className="w-full md:w-1/3 px-3 py-2 bg-red-700 text-white">Join Our List</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-6 items-center md:items-start">
          <div className="text-center">
            <h3 className="font-bold text-xl pb-1">Doctor App</h3>
            <img src={googleplay} alt="google-play" className="w-40 mx-auto" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl pb-1">Patient App</h3>
            <img src={googleplay} alt="google-play" className="w-40 mx-auto" />
          </div>
        </div>
      </div>
      {/* Right side image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
        <img src={sebaDetails} alt="" className="w-3/4 md:w-full" />
      </div>
    </div>
  );
};

export default Details;