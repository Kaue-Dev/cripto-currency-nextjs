import Image from "next/image";
import { FluctuationPercent } from "./fluctuation-percent";
import { CryptoPrice } from "./crypto-price";
import { CryptoName } from "./crypto-name";

interface CryptoCardProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_24h: number;
  gridLayout: boolean;
}

export function CryptoCard ({
  id,
  symbol,
  name,
  image,
  current_price,
  price_change_24h,
  gridLayout,
}: CryptoCardProps) {
  return (
    <div 
      key={id} 
      className={
        gridLayout ? 
        "p-4 dark-bg-border w-full max-w-56 flex flex-col items-center justify-center gap-4 rounded" : 
        "p-4 dark-bg-border w-full flex items-center gap-8 rounded"
      }
    >
      <Image src={image} alt={name} width={32} height={32} />
      <CryptoName name={name} symbol={symbol} />
      <div className="w-full flex justify-between items-center">
        <CryptoPrice current_price={current_price} />
        <FluctuationPercent currentPrice={current_price} priceChange24h={price_change_24h} />
      </div>
    </div>
  )
}
