"use client";

import { CryptoList } from "../crypto-list/crypto-list";
import { useState } from "react";
import { TCoin } from "@/entities/TCoin";
import { SearchInput } from "../search-input/search-input";
import { SortSection } from "../sort-section/sort-section";

interface ContentProps {
  data: Array<TCoin>;
}

export function Content({ data }: ContentProps) {

  const [searchValue, setSearchValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [sortedData, setSortedData] = useState<Array<TCoin>>(data);

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <SearchInput 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
        />
        <SortSection 
          isVisible={isVisible} 
          unsortedData={data} 
          setIsVisible={setIsVisible} 
          setSortedData={setSortedData} 
        />
      </div>
      <CryptoList 
        data={sortedData} 
        searchValue={searchValue}
      />
    </div>
  );
}
