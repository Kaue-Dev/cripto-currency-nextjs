import { CriptoCard } from "@/components/cripto-card/cripto-card";
import { TCoin } from "@/entities/TCoin";

interface CriptoListProps {
  data: Array<TCoin>;
  searchValue: string;
}

export function CriptoList({ data, searchValue }: CriptoListProps) {
  return (
    <div className="flex flex-wrap gap-8 justify-start items-start">
      {data.length <= 0 && <span>No cryptocurrencies found.</span>}

      {data.length > 0 && data
        .filter((coin) => coin.name.toLowerCase().includes(searchValue.toLowerCase()) || coin.symbol.toLowerCase().includes(searchValue.toLowerCase()))
        .map((coin) => {
          return (
            <CriptoCard
              key={coin.id}
              id={coin.id}
              symbol={coin.symbol}
              name={coin.name}
              image={coin.image}
              current_price={coin.current_price}
              price_change_24h={coin.price_change_24h}
            />
          );
        })}
    </div>
  );
}
