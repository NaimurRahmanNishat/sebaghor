import { useState } from "react";
import MobileSearch from "./MobileSearch";
import MobileFilter from "./MobileFilter";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [hasResults, setHasResults] = useState<boolean>(false);

  return (
    <>
      <div className="flex gap-10">
        {/* left side content show */}
        <div className="w-full md:w-[25%]">
          <div
            className={`hidden pt-3 px-2.5 md:block transition-opacity pb-5 duration-300 ${
              hasResults ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Empty Search Result
          </div>
        </div>
        {/* right side search bar icon */}
        <div className="w-full md:w-[75%]">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Doctor Search..."
              className="px-4 py-2 w-full border"
              onChange={(e) => setHasResults(e.target.value.length > 0)}
            />
            <div className="absolute top-0 right-0 px-8 py-[9px] bg-red-600 cursor-pointer">
              <Search/>
            </div>
          </div>
          <div className="flex justify-end gap-4 items-center md:hidden">
            <MobileSearch/>
            <MobileFilter/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
