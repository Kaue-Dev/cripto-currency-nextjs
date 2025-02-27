import Image from "next/image";

export default async function Page() {

  const baseUrl = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY;

  interface ICoin {
    id: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    high_24h: number;
    low_24h: number;
    last_updated: string;
  }

  const coinsID = "bitcoin,ethereum";

  const response = await fetch(`${baseUrl}coins/markets?vs_currency=usd&ids=${coinsID}&x_cg_demo_api_key=${apiKey}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const data: ICoin[] = await response.json();

  return (
    <div>
      {data.map((coin) => {
        return (
          <div key={coin.id}>
            <Image src={coin.image} alt={coin.name} width={100} height={100} />
            <div>{coin.name}</div>
          </div>
        )
      })}
    </div>
  )
}
