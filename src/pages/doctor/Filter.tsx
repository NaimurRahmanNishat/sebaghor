import { TowerControl } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

const Filter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TowerControl className="text-red-700" />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto pb-8">
        <div className="pt-20 px-4 grid gap-4 py-4">
          <h3 className="font-semibold text-lg">Department wise</h3>
          {departments.map((dept, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" />
              <p>{dept}</p>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
