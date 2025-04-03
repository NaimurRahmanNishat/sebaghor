import Filter from "./Filter";
import HospitalCard from "./HospitalCard";
import SearchBar from "./SearchBar";

const Hospital = () => {
  return (
    <div>
      <div className="md:pt-10 pt-6 pb-12">
        <SearchBar />
      </div>
      <div className="pt-8 flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/4">
          <Filter />
        </div>
        <div className="w-full md:w-3/4">
          <HospitalCard />
        </div>
      </div>
    </div>
  );
};

export default Hospital;
