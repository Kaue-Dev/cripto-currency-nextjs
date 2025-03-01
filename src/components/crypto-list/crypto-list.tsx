import { CryptoCard } from "@/components/crypto-card/crypto-card";
import { TCoin } from "@/entities/TCoin";

interface CryptoListProps {
  data: Array<TCoin>;
  searchValue: string;
}

export function CryptoList({ data, searchValue }: CryptoListProps) {
  return (
    <div className="flex flex-wrap gap-8 justify-start items-start">
      {data.length <= 0 && <span>No cryptocurrencies found.</span>}

      {data.length > 0 && data
        .filter((coin) => coin.name.toLowerCase().includes(searchValue.toLowerCase()) || coin.symbol.toLowerCase().includes(searchValue.toLowerCase()))
        .map((coin) => {
          return (
            <CryptoCard
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
