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

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
        <SortSection isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
      <CryptoList data={data} searchValue={searchValue} />
    </div>
  );
}
