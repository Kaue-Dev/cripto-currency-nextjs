interface SortOptionsListProps {
  isVisible: boolean;
  children: React.ReactNode;
}

export function SortOptionsList({ isVisible, children }: SortOptionsListProps) {
  return (
    <div className={`${isVisible ? "block" : "hidden"} absolute p-1 bg-zinc-900 border border-zinc-500 rounded flex flex-col gap-0.5 top-full mt-0.5 min-w-36`}>
      {children}
    </div>
  )
}
