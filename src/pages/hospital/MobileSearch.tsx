import { Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileSearch = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="bg-gray-100 p-1.5 rounded-md shadow">
            <Search className="text-red-500" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="pt-20 py-4">
            <div className="w-full px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border"
              />
            </div>
            <div className="w-full px-4 py-2">
              <button className="w-full py-2 bg-red-500 text-white">
                Search
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSearch;
