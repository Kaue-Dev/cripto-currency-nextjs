import { LayoutGrid, LayoutList } from "lucide-react";

interface ChangeLayoutProps {
  handleChangeLayout: () => void;
  gridLayout: boolean;
}

export function ChangeLayout({ handleChangeLayout, gridLayout }: ChangeLayoutProps) {
  return (
    <button
      className="p-2.5 dark-bg-border rounded cursor-pointer text-zinc-600 hover:bg-zinc-800"
      onClick={handleChangeLayout}
    >
      {gridLayout ? <LayoutGrid size={20} /> : <LayoutList size={20} />}
    </button>
  );
}
