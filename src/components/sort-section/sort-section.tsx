import { SlidersHorizontal } from "lucide-react";
import { SortOption } from "./sort-option";
import { TCoin } from "@/entities/TCoin";

interface SortSectionProps {
  isVisible: boolean;
  unsortedData: Array<TCoin>;
  setIsVisible: (isVisible: boolean) => void;
  setSortedData: (data: Array<TCoin>) => void;
}

export function SortSection({
  isVisible,
  unsortedData,
  setIsVisible,
  setSortedData,
}: SortSectionProps) {

  function sortByName() {
    setSortedData([...unsortedData].sort((a, b) => a.name.localeCompare(b.name)));
  }

  function sortByPrice() {
    setSortedData([...unsortedData].sort((a, b) => b.current_price - a.current_price));
  }

  return (
    <div className="relative">
      <button 
        className="p-2.5 bg-zinc-900 border border-zinc-800 rounded cursor-pointer text-zinc-600 hover:bg-zinc-800"
        onClick={() => setIsVisible(!isVisible)}
      >
        <SlidersHorizontal size={20} />
      </button>
      <div className={`${isVisible ? "block" : "hidden"} absolute p-1 bg-zinc-900 border border-zinc-500 rounded flex flex-col gap-0.5 top-full mt-0.5 min-w-36`}>
        <div className="py-2 px-4 text-zinc-500">Sort by</div>
        <div className="h-px w-[90%] mx-auto bg-zinc-800"></div>
        <SortOption onClick={sortByName}>
          Name
        </SortOption>
        <SortOption onClick={sortByPrice}>
          Price
        </SortOption>
      </div>
    </div>
  );
}
