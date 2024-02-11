import { setTotalPages } from '@/store/filteringData/filterSlice';
import { FilterState } from '@/store/filteringData/filterTypes';
import { useDispatch } from '@/store/hooks';
import { lotsdata } from '@/store/lotsData';
import { useDebounce } from '@/utils/debounce';
import { useEffect, useState } from 'react';
import { LotType } from './LotType';

const TAKE = 6;

export function useGetLotsQuery(filter: FilterState, refetch: boolean = false) {
  const [data, setData] = useState<LotType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const fetchData = useDebounce(async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let filteredData = lotsdata;

      // Apply filters
      filteredData = filteredData.filter(
        (lot) =>
          lot.name.toLowerCase().includes(filter.searchValue.toLowerCase().trim()) ||
          lot.description.toLowerCase().includes(filter.searchValue.toLowerCase().trim()) ||
          lot.placedBy.toLowerCase().includes(filter.searchValue.toLowerCase().trim()) ||
          lot.category.toLowerCase().includes(filter.searchValue.toLowerCase().trim()),
      );

      filteredData = filteredData.filter((lot) => lot.highestPrice <= filter.priceFilter.value[1]);

      const selectedCategories = filter.categories
        .filter((category) => category.checked)
        .map((category) => category.label);

      if (selectedCategories.length > 0) {
        filteredData = filteredData.filter((lot) => selectedCategories.includes(lot.category));
      }

      // Apply sorting
      if (filter.sortBy) {
        filteredData = filteredData.sort((a, b) => {
          if (filter.sortBy === 'Newest Arrivals') {
            return new Date(b.auctionStart).getTime() - new Date(a.auctionStart).getTime();
          }
          if (filter.sortBy === 'Oldest Arrivals') {
            return new Date(a.auctionStart).getTime() - new Date(b.auctionStart).getTime();
          }
          if (filter.sortBy === 'Price: Low to High') {
            return a.highestPrice - b.highestPrice;
          }
          if (filter.sortBy === 'Price: High to Low') {
            return b.highestPrice - a.highestPrice;
          }
          if (filter.sortBy === 'Time: Ending Soon') {
            return new Date(a.auctionEnd).getTime() - new Date(b.auctionEnd).getTime();
          }
          if (filter.sortBy === 'Time: Ending Later') {
            return new Date(b.auctionEnd).getTime() - new Date(a.auctionEnd).getTime();
          }
          return 0;
        });
      }

      // Apply pagination
      const startIndex = (filter.currentPage - 1) * TAKE;
      const endIndex = startIndex + TAKE;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      setData(paginatedData);
      dispatch(setTotalPages(Math.ceil(filteredData.length / TAKE)));

      setError(null);
    } catch (err) {
      setError('Error fetching lots');
    } finally {
      setIsLoading(false);
    }
  }, 300);

  useEffect(() => {
    if (refetch) {
      fetchData();
    }
  }, [filter, refetch]);

  return { data, isLoading, error, fetchData };
}

export function useGetLotQuery(id: string, refetch: boolean = false) {
  const [data, setData] = useState<LotType>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const lot = lotsdata.find((lot) => lot.id === +id);
      setData(lot);
      setError(null);
    } catch (err) {
      setError('Error fetching lot');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (refetch) {
      fetchData();
    }
  }, [id, refetch]);

  return { data, isLoading, error, fetchData };
}
