"use client";

import { CryptoList } from "../crypto-list/crypto-list";
import { useState } from "react";
import { TCoin } from "@/entities/TCoin";
import { SearchInput } from "../search-input/search-input";
import { SortButton } from "../sort-button/sort-button";
import { ChangeLayout } from "../change-layout/change-layout";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ContentProps {
  data: Array<TCoin>;
}

export function Content({ data }: ContentProps) {

  const [searchValue, setSearchValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [sortedData, setSortedData] = useState<Array<TCoin>>(data);
  const [gridLayout, setGridLayout] = useState<boolean>(true);

  function handleChangeLayout() {
    setGridLayout(!gridLayout);
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <SearchInput 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
        />
        <SortButton 
          isVisible={isVisible} 
          unsortedData={data} 
          setIsVisible={setIsVisible} 
          setSortedData={setSortedData} 
        />
        <ChangeLayout 
          handleChangeLayout={handleChangeLayout} 
          gridLayout={gridLayout} 
        />
        <Link 
          href="/details"
          className="bg-zinc-900 border border-zinc-800 py-2 px-4 rounded flex items-center gap-1 hover:bg-zinc-800"
        >
          Details
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <CryptoList 
        data={sortedData} 
        searchValue={searchValue}
        gridLayout={gridLayout}
      />
    </div>
  );
}
