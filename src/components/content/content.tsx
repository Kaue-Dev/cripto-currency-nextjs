"use client";

import { Search } from "lucide-react";
import { CriptoList } from "../cripto-list/cripto-list";
import { useState } from "react";
import { TCoin } from "@/entities/TCoin";

interface ContentProps {
  data: Array<TCoin>;
}

export function Content({ data }: ContentProps) {
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <div className="mb-8 py-2 px-4 bg-zinc-900 border border-zinc-800 flex items-center rounded w-full max-w-96">
        <input
          type="text"
          className="w-full outline-0 text-base placeholder:text-zinc-600"
          placeholder="Search for a cryptocurrency"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search size={20} className="text-zinc-600" />
      </div>
      
      <CriptoList data={data} />
    </div>
  );
}
