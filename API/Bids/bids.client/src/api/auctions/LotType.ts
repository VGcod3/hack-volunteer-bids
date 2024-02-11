import { AuctionCategory } from "@/app/auctions/create/page";

export type LotType = {
  id: number;
  name: string;
  description: string;
  category: AuctionCategory | null;
  startPrice: number;
  highestPrice: number;
  placedBy: string;
  StartDate: string;
  FinishDate: string;
};
