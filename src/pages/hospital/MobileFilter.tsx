import { LampFloor } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    "Satkhira"
  ];
  
const MobileFilter = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="bg-gray-100 p-1.5 rounded-md shadow">
            <LampFloor className="text-red-700" />
          </div>
        </SheetTrigger>
        <SheetContent className="pt-20 px-3 overflow-y-auto">
            {/* all division */}
            <div>
                <h2 className="pb-2 text-xl font-semibold">All Division</h2>
                {Divisions.map((division, index) => (
                    <p key={index} className="py-1 font-medium">{division}</p>
                ))}
            </div>
            {/* all district */}
            <div className="pt-8">
                <h2 className="pb-2 text-xl font-semibold">All District</h2>
                {Districts.map((district, index) => (
                    <p key={index} className="py-1 font-medium">{district}</p>
                ))}
            </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileFilter;
