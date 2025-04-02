import { TowerControl } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Filter = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
        <TowerControl className="text-red-700"/>
        </SheetTrigger>
        <SheetContent>
          <div className="pt-20 px-4 grid gap-4 py-4">
            name
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Filter;
