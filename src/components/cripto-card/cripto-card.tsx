import Image from "next/image";

interface CriptoCardProps {
  id: string;
  name: string;
  image: string;
}

export function CriptoCard (props: CriptoCardProps) {
  return (
    <div key={props.id} className="py-4 px-2 border border-zinc-800 bg-zinc-900 w-full max-w-56 flex flex-col items-center gap-4 rounded">
      <Image src={props.image} alt={props.name} width={32} height={32} />
      <h3 className="text-lg">{props.name}</h3>
    </div>
  )
}