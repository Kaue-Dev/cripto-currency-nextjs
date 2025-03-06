interface SortOptionProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SortOption({ children, ...props }: SortOptionProps) {
  return (
    <button 
      className="flex items-center justify-between w-full py-2 px-4 rounded cursor-pointer text-start hover:bg-zinc-800"
      {...props}
    >
      {children}
    </button>
  );
}