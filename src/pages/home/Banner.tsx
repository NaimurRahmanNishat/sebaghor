import { Search } from "lucide-react";
import { Link } from "react-router";
import s from "../../assets/s.png";

const Banner = () => {
  return (
    <>
      <div className="absolute h-[600px] left-0 w-full bg-cover bg-center" style={{ backgroundImage: `url(${s})` }}>
        <div className="max-w-screen-xl mx-auto container px-4 md:px-0">
          <div className="md:px-24 md:pt-32 pt-16 md:pb-32 pb-16 flex flex-col">
            <h3 className="text-3xl font-bold text-white pb-4">
              Find your Doctor!
            </h3>
            <p className="text-white text-xl">
              Get Telemedicine and Doctor Video Consultation service with
              thousands of Doctors and Hospitals in <span className="flex-col md:hidden">Bangladesh.</span> <span className="md:flex hidden">Bangladesh.</span>
            </p>
            <div className="flex items-center justify-end pt-4 pb-4">
              <ul className="flex items-center gap-2">
                <li className="px-6 py-2 border cursor-pointer border-gray-500 text-white">
                  Doctor
                </li>
                <li className="px-6 py-2 border cursor-pointer border-gray-500 text-white">
                  Hospital
                </li>
              </ul>
            </div>
            {/* search filter */}
            <div className="flex items-center bg-white">
              <Search className="text-gray-500 mx-2" />
              <input
                type="text"
                className="px-4 py-5 rounded-md w-full outline-none"
                placeholder="Search Doctor or Hospital"
              />
            </div>
            {/* trending details */}
            <div className="">
              <ul className="pt-3 flex flex-wrap w-full gap-x-1 gap-y-1">
                <li className="text-lg font-semibold text-white">Trending:</li>
                <li>
                  <Link
                    to="/doctor"
                    className="underline text-white hover:text-white/60 pl-2"
                  >
                    Dentist,
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctor"
                    className="underline text-white hover:text-white/60"
                  >
                    Dermatologist,
                  </Link>
                </li>
                <li className="w-full sm:w-auto">
                  <Link
                    to="/doctor"
                    className="underline text-white hover:text-white/60"
                  >
                    Immunodermatologist,
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctor"
                    className="underline text-white hover:text-white/60"
                  >
                    Gynaecologist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;


