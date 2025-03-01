import { TrendingDown, TrendingUp } from "lucide-react";

interface FluctuationPercentProps {
  currentPrice: number;
  priceChange24h: number;
}

export function FluctuationPercent (props: FluctuationPercentProps) {

  const previousPrice = props.currentPrice - props.priceChange24h;
  const fluctuation = (props.priceChange24h / previousPrice) * 100;

  return (
    <div>
      {fluctuation > 0 ? (
        <span className="text-xs font-bold text-green-500 flex items-center gap-1">
          {fluctuation.toFixed(2)}%
          <TrendingUp size={14} />
        </span>
      ) : (
        <span className="text-xs font-bold text-red-500 flex items-center gap-1">
          {fluctuation.toFixed(2)}%
          <TrendingDown size={14} />
        </span>
      )}
    </div>
  )
}
