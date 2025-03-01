interface CryptoNameProps {
  name: string;
  symbol: string;
}

export function CryptoName (props: CryptoNameProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <h3 className="text-lg">{props.name}</h3>
      <span className="text-xs uppercase text-zinc-400">({props.symbol})</span>
    </div>
  )
}