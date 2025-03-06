import { SlidersHorizontal } from "lucide-react";
import { SortOption } from "./sort-option";

interface SortSectionProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export function SortSection({
  isVisible,
  setIsVisible,
}: SortSectionProps) {
  return (
    <div className="relative">
      <button 
        className="p-2.5 bg-zinc-900 border border-zinc-800 rounded cursor-pointer text-zinc-600 hover:bg-zinc-800"
        onClick={() => setIsVisible(!isVisible)}
      >
        <SlidersHorizontal size={20} />
      </button>
      <div className={isVisible ? "block" : "hidden"}>
        <div className="absolute p-1 bg-zinc-900 border border-zinc-500 rounded flex flex-col gap-0.5 top-full mt-0.5">
          <SortOption className="w-full py-2 px-4 rounded cursor-pointer text-start hover:bg-zinc-800">
            Name
          </SortOption>
          <SortOption className="w-full py-2 px-4 rounded cursor-pointer text-start hover:bg-zinc-800">
            Price
          </SortOption>
          <SortOption className="w-full py-2 px-4 rounded cursor-pointer text-start hover:bg-zinc-800">
            Fluctuation
          </SortOption>
        </div>
      </div>
    </div>
  );
}
