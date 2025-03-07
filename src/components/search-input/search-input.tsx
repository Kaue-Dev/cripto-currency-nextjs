import { Search } from "lucide-react";

interface SearchInputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export function SearchInput({
  searchValue,
  setSearchValue,
}: SearchInputProps) {
  return (
    <div className="py-2 px-4 dark-bg-border flex items-center rounded w-full max-w-96">
      <input
        type="text"
        className="w-full outline-0 text-base placeholder:text-zinc-600"
        placeholder="Search for a cryptocurrency"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Search size={20} className="text-zinc-600" />
    </div>
  );
}
