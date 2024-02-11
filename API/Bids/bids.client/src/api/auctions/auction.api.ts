import { setTotalPages } from '@/store/filteringData/filterSlice';
import { FilterState } from '@/store/filteringData/filterTypes';
import { useDispatch } from '@/store/hooks';
import { lotsdata } from '@/store/lotsData';
import { useDebounce } from '@/utils/debounce';
import { useEffect, useState } from 'react';
import { LotType } from './LotType';

const TAKE = 6;

export function useGetLotsQuery(filter: FilterState, refetch: boolean = false) {
  const basePath = "http://localhost:5293";
  const baseAunctionPath = basePath  + "/api/Auctions";

  const [data, setData] = useState<LotType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const fetchData = useDebounce(async () => {
    setIsLoading(true);
    try {
      await fetch(baseAunctionPath)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
        
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
