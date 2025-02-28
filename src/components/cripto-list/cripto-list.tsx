"use server";

// Interfaces
import { ICoin } from "@/interfaces/ICoin";

// Components
import { CriptoCard } from "@/components/cripto-card/cripto-card";

export async function CriptoList() {

  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY;

  const coinsID = "bitcoin,ethereum,tether,binancecoin,usd-coin,ripple,cardano,solana,dogecoin,polkadot,dai,shiba-inu,tron,uniswap,avalanche-2";

  const response = await fetch(`${baseUrl}coins/markets?vs_currency=usd&ids=${coinsID}&x_cg_demo_api_key=${apiKey}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const data: ICoin[] = await response.json();
  
  return (
    <div className="flex flex-wrap gap-8 justify-start items-start">
      {data.length <= 0 && <span>No cryptocurrencies found.</span>}
      {data.length > 0 &&
        data.map((coin) => {
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
