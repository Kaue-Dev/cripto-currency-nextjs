import { SlidersHorizontal } from "lucide-react";
import { SortOption } from "./sort-option";
import { TCoin } from "@/entities/TCoin";
import { SortOptionsList } from "./sort-options-list";

interface SortButtonProps {
  isVisible: boolean;
  unsortedData: Array<TCoin>;
  setIsVisible: (isVisible: boolean) => void;
  setSortedData: (data: Array<TCoin>) => void;
}

export function SortButton({
  isVisible,
  unsortedData,
  setIsVisible,
  setSortedData,
}: SortButtonProps) {

  function sortByName() {
    setSortedData([...unsortedData].sort((a, b) => a.name.localeCompare(b.name)));
    setIsVisible(false);
  }

  function sortByPrice() {
    setSortedData([...unsortedData].sort((a, b) => b.current_price - a.current_price));
    setIsVisible(false);
  }

  return (
    <div className="relative">
      <button 
        className="p-2.5 dark-bg-border rounded cursor-pointer text-zinc-600 hover:bg-zinc-800"
        onClick={() => setIsVisible(!isVisible)}
      >
        <SlidersHorizontal size={20} />
      </button>
      <SortOptionsList isVisible={isVisible}>
        <div className="py-2 px-4 text-zinc-500">Sort by</div>
        <div className="h-px w-[90%] mx-auto bg-zinc-800"></div>
        <SortOption onClick={sortByName}>
          Name
        </SortOption>
        <SortOption onClick={sortByPrice}>
          Price
        </SortOption>
      </SortOptionsList>
    </div>
  );
}
