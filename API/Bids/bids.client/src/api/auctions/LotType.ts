export type LotType = {
  id: number;
  name: string;
  description: string;
  category: string;
  startPrice: number;
  highestPrice: number;
  placedBy: string;
  images: string[];
  auctionStart: string;
  auctionEnd: string;
};
