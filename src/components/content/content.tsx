"use client";

import { Search } from "lucide-react";
import { CryptoList } from "../crypto-list/crypto-list";
import { useState } from "react";
import { TCoin } from "@/entities/TCoin";

interface ContentProps {
  data: Array<TCoin>;
}

export function Content({ data }: ContentProps) {

  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div>
      <div className="mb-8 py-2 px-4 bg-zinc-900 border border-zinc-800 flex items-center rounded w-full max-w-96">
        <input
          type="text"
          className="w-full outline-0 text-base placeholder:text-zinc-600"
          placeholder="Search for a cryptocurrency"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search size={20} className="text-zinc-600" />
      </div>
      
      <CryptoList data={data} searchValue={searchValue} />
    </div>
  );
}
