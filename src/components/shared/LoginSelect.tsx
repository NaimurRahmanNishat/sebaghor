import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LoginSelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[160px] rounded-none">
          <SelectValue placeholder="--Select One--" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>--Select One--</SelectLabel>
            <SelectItem value="doctor">Doctor</SelectItem>
            <SelectItem value="agent">Agent</SelectItem>
            <SelectItem value="laboratory">Laboratory</SelectItem>
            <SelectItem value="insurance">Insurance</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LoginSelect;
