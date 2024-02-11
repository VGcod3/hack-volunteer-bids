'use client';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import LotCard from '@/components/LotCard/LotCard'; // Fix import statement
import { useEffect } from 'react';

import { useGetLotsQuery } from '@/api/auctions/auction.api';
import { useSelector } from '@/store/hooks';
import Link from 'next/link';
import { ErrorDisplayComponent } from './LotCard/ErrorDisplayComponent';
import { LotCardsSkeleton } from './LotCard/LotCardsSkeleton';

export default function LotCardsGrid() {
  const filter = useSelector((state) => state.filter);
  const { data: lotsList, isLoading, error, fetchData } = useGetLotsQuery(filter, true);

  useEffect(() => {
    fetchData();
  }, [filter]);

  if (isLoading) {
    return <LotCardsSkeleton />;
  }

  if (error) {
    return <ErrorDisplayComponent error={error} />;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {lotsList.map((lot, index) => (
        <AnimatedWrapper delay={0.2} key={index}>
          <LotCard
            imageUrl={""}
            name={lot.name}
            highestPrice={lot.highestPrice}
            index={index}
            description={lot.description}
          />
        </AnimatedWrapper>
      ))}
      <div className='text-center mt-8'>
        <AnimatedWrapper>
          <Link
            href='/auctions'
            className='inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'>
            Browse more
          </Link>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
