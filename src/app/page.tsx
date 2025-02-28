"use server";

// Components
import { CriptoCard } from "@/components/cripto-card/cripto-card";

// Interfaces
import { ICoin } from "@/interfaces/ICoin";

// Icons
import { Search } from "lucide-react";

export default async function Page() {

  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY;

  const coinsID = "bitcoin,ethereum,tether,binancecoin,usd-coin,ripple,cardano,solana,dogecoin,polkadot,dai,shiba-inu,tron,uniswap,avalanche-2";

  const response = await fetch(`${baseUrl}coins/markets?vs_currency=usd&ids=${coinsID}&x_cg_demo_api_key=${apiKey}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const data: ICoin[] = await response.json();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-4xl mb-8">Cryptocurrency Quote</h1>

      <div className="mb-8 py-2 px-4 bg-zinc-900 border border-zinc-800 flex items-center rounded-full w-full max-w-96">
        <input 
          type="text" 
          className="w-full outline-0 text-base placeholder:text-zinc-600"
          placeholder="Search for a cryptocurrency"
        />
        <Search size={20} className="text-zinc-600" />
      </div>

      <div className="flex flex-wrap gap-8 justify-start items-start">
        {data.map((coin) => {
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
          )
        })}
      </div>
    </div>
  )
}
