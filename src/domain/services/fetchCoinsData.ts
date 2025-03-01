"use server";

import { TCoin as Output } from "@/entities/TCoin";
import { coinsID } from "@/shared/constants";

type Setup = () => Promise<Array<Output>>

export const fetchCoinsData : Setup = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}coins/markets?vs_currency=usd&ids=${coinsID}&x_cg_demo_api_key=${process.env.API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data from API");
  }

  return response.json() as unknown as Output[]
}