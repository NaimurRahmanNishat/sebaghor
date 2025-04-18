import { Search, SlidersVertical } from "lucide-react";
import { useState } from "react";
import HeroCard from "../home/HeroCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Articale from "../home/Articale";

const departments = [
  "Respiratory Medicine",
  "Medicine",
  "General Physician",
  "ENT",
  "Skin & VD",
  "Dentistry",
  "Psychiatry",
  "Physiotherapy",
  "Gastroenterology",
  "Pediatrics (CHILD)",
  "General practitioner",
  "Cardio - Vascular Surgery",
  "Orthopaedic",
  "Diabetes & Endocrinology",
  "Nutritionest",
  "Pain Medicine",
  "Colorectal Surgery(Piles)",
  "Neuro-Surgery",
  "Dermatology",
  "Oncology (cancer)",
  "Gynecology",
  "COVID-19 (coronavirus) Specialist",
  "EYE",
  "Physical Medicine",
  "Cardiology",
  "Plastic Surgery",
  "Gastroenterology",
  "Urology",
  "General surgery",
  "Cancer (Oncology)",
  "Nephrology (Kidney)",
  "Hematology",
  "Psychology",
  "Vascular Surgery",
];
const Doctor = () => {
  const [hasResults, setHasResults] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="pt-8">
        <div className="flex flex-col md:flex-row md:gap-16 gap-2 md:pb-24">
          {/* Left side */}
          <div className="w-full md:w-[25%]">
            <div
              className={`hidden md:block transition-opacity pb-5 duration-300 ${
                hasResults ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              Empty Search Result
            </div>
            {/* category section */}
            <div className="md:pt-28 w-full md:w-[100%]">
              <div className="hidden md:block bg-gray-100 px-4 py-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Department wise</h3>
                  <button onClick={handleOpenMenu}>
                    <SlidersVertical size={20} className="cursor-pointer" />
                  </button>
                </div>
                <div className="pt-8">
                  {openMenu && (
                    <div className="flex flex-col gap-2">
                      <div>
                        {departments.map((dept, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-5 py-2"
                          >
                            <input type="checkbox" />
                            <p>{dept}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="w-full md:w-[75%]">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Doctor Search..."
                className="px-4 py-2 w-full border"
                onChange={(e) => setHasResults(e.target.value.length > 0)}
              />
              <div className="absolute top-0 right-0 px-8 py-[9px] bg-simpleGreen cursor-pointer">
                <Search className="text-white"/>
              </div>
            </div>
            {/* doctor section */}
            <div className="md:pt-8 pb-10">
              <div className="md:hidden flex items-center gap-3 justify-end px-4">
                <SearchBar />
                <Filter />
              </div>
              <HeroCard />
            </div>
          </div>
        </div>
        <div className="pt-20 pb-10">
          <h2 className="text-2xl font-semibold">Related Articles</h2>
          <Articale/>
        </div>
      </div>
    </>
  );
};

export default Doctor;
