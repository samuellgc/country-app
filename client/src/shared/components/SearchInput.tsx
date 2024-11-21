import { Icon } from "@iconify/react/dist/iconify.js";

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({
  value,
  onChange,
  placeholder,
}: SearchInputProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 w-full border rounded-lg">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent outline-none w-full"
      />
      <Icon className="text-2xl" icon="ic:twotone-search" />
    </div>
  );
}
