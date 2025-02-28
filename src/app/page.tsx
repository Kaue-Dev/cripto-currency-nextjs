// Icons
import { Search } from "lucide-react";

// Images
import Image from "next/image";
import Logo from "@/assets/images/logo.png"

// Components
import { CriptoList } from "@/components/cripto-list/cripto-list";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <Image src={Logo} alt="Crypto Currency" width={300} height={200} className="invert mb-8 select-none" />

      <div className="mb-8 py-2 px-4 bg-zinc-900 border border-zinc-800 flex items-center rounded-full w-full max-w-96">
        <input 
          type="text" 
          className="w-full outline-0 text-base placeholder:text-zinc-600"
          placeholder="Search for a cryptocurrency"
        />
        <Search size={20} className="text-zinc-600" />
      </div>

      <CriptoList />
    </div>
  )
}
