import { useState } from "react";
import hospitalOne from "../../assets/hospital/hospitalOne.jpg";
import hospitalTwo from "../../assets/hospital/hospitalTwo.jpg";
import hospitalThree from "../../assets/hospital/hospitalThree.jpg";
import hospitalFour from "../../assets/hospital/hospitalFour.jpg";
import hospitalFive from "../../assets/hospital/hospitalFive.jpg";
import hospitalSix from "../../assets/hospital/hospitalSix.jpg";
import hospitalSeven from "../../assets/hospital/hospitalSeven.jpg";
import hospitalEight from "../../assets/hospital/hospitalEight.jpg";
import hospitalNine from "../../assets/hospital/hospitalNine.jpg";
import hospitalTen from "../../assets/hospital/hospitalTen.jpg";
import { MoveLeft, MoveRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

interface Hospital {
  id: number;
  name: string;
  image: string;
  address: string;
}

const HospitalList: Hospital[] = [
  { id: 1, name: "Baridhara General Hospital Ltd.", image: hospitalOne, address: "Ka 51/1 Progoti Sharoni, Nadda, Dhaka, 1212" },
  { id: 2, name: "Dhaka Community Hospital", image: hospitalTwo, address: "190/1, Baro Moghbazar, Wireless Railgate, Dhaka-1217, Bangladesh." },
  { id: 3, name: "Galachipa Upazila Health Complex", image: hospitalThree, address: "Galachipa Upazila Health Complex, phone 01716074580" },
  { id: 4, name: "Abedin General Hospital and Consultation Center", image: hospitalFour, address: "7/13, Block-B, Humayan Road, College Gate, Mohamadpur, Dhaka-1207, Bangladesh." },
  { id: 5, name: "Abhoynagar Upazila Health Complex", image: hospitalFive, address: "Abhoynagar Upazila Health Complex phone: 01717582244" },
  { id: 6, name: "Abir General Hospital", image: hospitalSix, address: "18, New Eskaton Road (Nur Nogor) Dhaka, Bangladesh." },
  { id: 7, name: "Ad-Din Akij Medical College Hospital", image: hospitalSeven, address: "Phone: +88017134884959" },
  { id: 8, name: "Ad-din Hospital Kushtia", image: hospitalEight, address: "19/1 Chand Mohammad Sarak Thanapara, Kushtia" },
  { id: 9, name: "Ad-din Medical College Hospital", image: hospitalNine, address: "2 Bara Maghbazar, Dhaka-1217" },
  { id: 10, name: "Ad-din medical college hospital", image: hospitalTen, address: "2, Bara Maghbazar, Dhaka-1217. Phone: 096-12345666, 01987 77 77 77,01713-488418 (24 hrs Manager)." }
];

const HospitalCard = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(HospitalList.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHospitals = HospitalList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {currentHospitals.map((hospital) => (
        <div className="pb-12" key={hospital.id}>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/4">
              <img src={hospital.image} alt={hospital.name} className="w-full" />
            </div>
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl font-semibold">{hospital.name}</h2>
              <p className="py-2">{hospital.address}</p>
              <div className="pt-12">
                <button className="px-4 py-2 bg-red-600 font-medium hover:bg-red-700 text-white cursor-pointer">Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-4">
      <Pagination>
          <PaginationContent>
            <PaginationItem>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-2 py-2 border cursor-pointer rounded ${
                  currentPage === 1
                    ? "text-gray-400 disabled:opacity-30 cursor-not-allowed"
                    : "text-black"
                }`}
              >
                <MoveLeft size={16} className="text-red-600"/>
              </button>
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === index + 1
                      ? "bg-[#198754] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              </PaginationItem>
            ))}
            <PaginationItem>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-2 py-2 border cursor-pointer rounded ${
                  currentPage === totalPages
                    ? "text-gray-400 disabled:opacity-30 cursor-not-allowed"
                    : "text-black"
                }`}
              >
                <MoveRight size={16} className="text-red-600"/>
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default HospitalCard;
