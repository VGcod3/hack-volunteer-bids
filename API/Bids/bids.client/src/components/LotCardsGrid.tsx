'use client';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import LotCard from '@/components/LotCard'; // Fix import statement
import { useDispatch, useSelector } from '@/store/hooks';
import { fetchLotsFailure, fetchLotsStart, fetchLotsSuccess } from '@/store/lotSlice';
import { useEffect } from 'react';

import { lotsdata } from '@/store/lotsData';

export default function LotCardsGrid() {
  const { lots, loading, error } = useSelector((state) => state.lot);

  const dispatch = useDispatch();

  const fetchLots = async () => {
    try {
      dispatch(fetchLotsStart());

      setTimeout(() => {
        dispatch(fetchLotsSuccess(lotsdata));
      }, 1000);
    } catch (error: any) {
      console.error('Error fetching lots:', error?.message);
      dispatch(fetchLotsFailure({ error: 'Error fetching lots:' }));
    }
  };

  useEffect(() => {
    fetchLots();
  }, []);

  console.log(lotsdata, loading, error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {lots.map((lot, index) => (
        <AnimatedWrapper delay={0.2} key={index}>
          <LotCard
            imageUrl={lot.images[0]}
            name={lot.name}
            highestPrice={lot.highestPrice}
            index={index}
            description={lot.description}
          />
        </AnimatedWrapper>
      ))}
    </div>
  );
}
