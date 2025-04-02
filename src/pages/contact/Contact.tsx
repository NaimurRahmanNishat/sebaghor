import { Minus } from "lucide-react";
import map from "../../assets/map.png";

const Contact = () => {
  return (
    <>
      <div>
        {/* map image */}
        <div className="absolute top-20 right-0">
          <img
            src={map}
            alt="map_image"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
        {/* contact information */}
        <div className="absolute w-full right-0 pt-[300px] md:pt-[500px]">
          <div className="py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center border-b-2 px-6 md:px-16 lg:px-32 xl:px-64 mx-auto">
            <div className="md:border-r-2 border-gray-300 px-4">
              <p className="font-bold text-lg">MESSAGE US</p>
              <h3 className="text-xl md:text-2xl font-semibold cursor-pointer hover:text-[#b90001]">
                Start a chat!
              </h3>
            </div>
            <div className="md:border-r-2 border-gray-300 px-4">
              <p className="font-bold text-lg">Call anytime</p>
              <h3 className="text-xl md:text-2xl font-semibold cursor-pointer hover:text-[#b90001]">
                01531862257
              </h3>
            </div>
            <div className="px-4">
              <p className="font-bold text-lg">Email us</p>
              <h3 className="text-xl md:text-2xl font-semibold cursor-pointer hover:text-[#b90001]">
                business@sebaghar.com
              </h3>
            </div>
          </div>
        </div>
        {/* address & contact message */}
        <div className="lg:pt-[720px] pt-[600px] w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#555a64] text-center pt-10">
              Contact With Sebaghar For Any Information
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 px-2 sm:px-6 md:px-48">
              {/* Left side address */}
              <div className="w-full md:w-1/2">
                <div className="pt-6 md:pt-20">
                  <div className="flex gap-3 items-center">
                    <span className="text-[#b90001]">
                      <Minus size={24} />
                    </span>
                    <h3 className="font-bold text-[#555a64] pb-1 text-lg md:text-xl">
                      Address
                    </h3>
                  </div>
                  <p className="text-sm md:text-base">
                    4th Floor, B-25, Mannan Plaza, Khilkhet, Dhaka, Bangladesh
                  </p>
                </div>
                <div className="pt-4 md:pt-6">
                  <div className="flex gap-3 items-center">
                    <span className="text-[#b90001]">
                      <Minus size={24} />
                    </span>
                    <h3 className="font-bold text-[#555a64] pb-1 text-lg md:text-xl">
                      Phone & WhatsApp
                    </h3>
                  </div>
                  <p className="text-sm md:text-base">01531862257</p>
                  <p className="text-sm md:text-base">+8801951900200</p>
                </div>
                <div className="pt-4 md:pt-6 pb-8">
                  <div className="flex gap-3 items-center">
                    <span className="text-[#b90001]">
                      <Minus size={24} />
                    </span>
                    <h3 className="font-bold text-[#555a64] pb-1 text-lg md:text-xl">
                      Email
                    </h3>
                  </div>
                  <p className="text-sm md:text-base">business@sebaghar.com</p>
                  <p className="text-sm md:text-base">sebaghar@gmail.com</p>
                </div>
              </div>
              {/* Right side message */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 pt-10 pb-8">
                <form className="flex flex-col space-y-3 md:space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name@"
                    className="w-full p-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
                  />
                  <input
                    type="email"
                    placeholder="Email address@"
                    className="w-full p-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full p-3 border border-gray-300 rounded-sm h-28 md:h-32 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
                  ></textarea>
                </form>
                <div className="flex items-start">
                  <button className="bg-red-700 px-4 py-2 hover:bg-red-800 cursor-pointer text-white rounded-sm">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
