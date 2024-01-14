import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputProps<K extends string, V extends string> {
  label: string;
  labelClassName?: string;
  name: K;
  value?: V;
  placeholder: string;
  inputStyle?: React.CSSProperties;
  onChange: (name: K, value: V) => void;
}

export const InlineInput = <K extends string>({
  label,
  labelClassName,
  name,
  value = "",
  placeholder,
  inputStyle = {},
  onChange,
}: InputProps<K, string>) => {
  return (
    <div
      className={`flex gap-2 text-base font-medium text-gray-700 ${labelClassName}`}
    >
      {/* <Label className="w-28">{label}</Label> */}
      {/* <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-[5rem]   text-center font-semibold leading-3 outline-none"
        style={inputStyle}
      /> */}

      <div className="flex w-full max-w-xs items-center gap-2">
        <Label htmlFor="Theme Color" className="w-28">{label}</Label>
        <Input
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          style={inputStyle}
          className=""
        />
      </div>
    </div>
  );
};
