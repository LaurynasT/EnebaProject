export interface Game {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  finalPrice: number;
  discount?: number;
  platform: string;
  likes?: number;
  region?: string;
  cashback: number;
  platformImageUrl?: string;
}
