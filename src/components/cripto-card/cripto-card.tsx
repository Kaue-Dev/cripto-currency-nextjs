// Images
import Image from "next/image";

// Components
import { FluctuationPercent } from "./fluctuation-percent";
import { CriptoPrice } from "./cripto-price";
import { CriptoName } from "./cripto-name";

interface CriptoCardProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_24h: number;
}

export function CriptoCard (props: CriptoCardProps) {
  return (
    <div key={props.id} className="p-4 border border-zinc-800 bg-zinc-900 w-full max-w-56 flex flex-col items-center justify-center gap-4 rounded">
      <Image src={props.image} alt={props.name} width={32} height={32} />
      <CriptoName name={props.name} symbol={props.symbol} />
      <div className="w-full flex justify-between items-center">
        <CriptoPrice current_price={props.current_price} />
        <FluctuationPercent currentPrice={props.current_price} priceChange24h={props.price_change_24h} />
      </div>
    </div>
  )
}
