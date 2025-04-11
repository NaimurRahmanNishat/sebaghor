import { SlidersVertical } from "lucide-react";
import { useState } from "react";

const Divisions = [
  "Dhaka",
  "Chittagong",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

const Districts = [
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Jamalpur",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Mymensingh",
  "Narayanganj",
  "Narsingdi",
  "Netrokona",
  "Rajbari",
  "Shariatpur",
  "Sherpur",
  "Tangail",
  "Bogra",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Nawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajgonj",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Barguna",
  "Barisal",
  "Bhola",
  "Jhalokati",
  "Patuakhali",
  "Pirojpur",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chittagong",
  "Comilla",
  "Cox's Bazar",
  "Feni",
  "Khagrachari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Habiganj",
  "Maulvibazar",
  "Sunamganj",
  "Sylhet",
  "Bagerhat",
  "Chuadanga",
  "Jessore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
];

const Filter = () => {
  const [isOpenDistrict, setIsOpenDistrict] = useState<boolean>(true);
  const [isOpenDevision, setIsOpenDivision] = useState<boolean>(true);
  const handleOpenClickDistrict = () => {
    setIsOpenDistrict(!isOpenDistrict);
  };

  const handleOpenClickDevision = () => {
    setIsOpenDivision(!isOpenDevision);
  };
  
  return (
    <div className="pb-12">
      <div className="bg-gray-100">
        <div>
          <div className="pt-4 px-4 grid gap-4 py-4">
            <div
              onClick={handleOpenClickDistrict}
              className="flex items-center gap-2 justify-between cursor-pointer"
            >
              <h3 className="font-semibold text-lg">Division wise</h3>
              <SlidersVertical size={20} className="cursor-pointer" />
            </div>
            {isOpenDistrict &&
              Divisions.map((division, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>{division}</p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className="pt-10 px-4 grid gap-4 py-4">
            <div
              onClick={handleOpenClickDevision}
              className="flex items-center gap-2 justify-between cursor-pointer"
            >
              <h3 className="font-semibold text-lg">District wise</h3>
              <SlidersVertical size={20} className="cursor-pointer" />
            </div>
            {isOpenDevision &&
              Districts.map((district, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>{district}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
