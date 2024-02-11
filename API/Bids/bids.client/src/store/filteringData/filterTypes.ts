export enum SortOptionsEnum {
  '-createdAt' = 'Newest Arrivals',
  'createdAt' = 'Oldest Arrivals',
  'price' = 'Price: Low to High',
  '-price' = 'Price: High to Low',
  'timeEnd' = 'Time: Ending Soon',
  '-timeEnd' = 'Time: Ending Later',
}
export enum CategoriesEnum {
  'Art',
  'Jewelry',
  'Collectibles',
  'Home',
  'Fashion',
  'Motors',
  'Electronics',
  'Toys',
  'Travel',
  'Other',
}
export interface CategoryOption {
  value: CategoriesEnum;
  label: string;
  checked: boolean;
}
export interface PriceFilter {
  min: number;
  max: number;
  value: [number, number];
}
export interface FilterState {
  categories: CategoryOption[];
  priceFilter: PriceFilter;
  currentPage: number;
  totalPages: number;
  searchValue: string;
  sortBy: SortOptionsEnum;
}
