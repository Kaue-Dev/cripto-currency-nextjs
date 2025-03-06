interface SortOptionProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SortOption({ children }: SortOptionProps) {
  return (
    <button className="w-full py-2 px-4 rounded cursor-pointer text-start hover:bg-zinc-800">
      {children}
    </button>
  );
}