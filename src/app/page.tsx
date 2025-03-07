import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Content } from "@/components/content/content";
import { fetchCoinsData } from "@/domain/services/fetchCoinsData";

export default async function Page() {

  const data = await fetchCoinsData()

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <Image
        src={Logo}
        alt="Crypto Currency"
        width={300}
        height={200}
        className="invert mb-8 select-none"
      />

      <Content data={data} />
    </div>
  );
}
