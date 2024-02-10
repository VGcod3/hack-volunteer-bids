'use client';

import { useState } from 'react';

import SortingButtons from '@/components/SortingButtons';

import GoodsGrid from '@/components/GoodsGrid';
import GoodsList from '@/components/GoodsList';
import CollapsibleFilters from './CollapsibleFilters';
import Search from './Search';

import { PaginationElement } from './PaginationElement';

export default function AuctionsBrowse() {
  const [showFullRoomsData, setShowFullRoomsData] = useState(false);

  return (
    <div className='bg-neutral-100'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 border-b border-neutral-200 pb-6 pt-24'>
          <h1 className='text-3xl font-bold tracking-tight text-neutral-800'>
            Have a nice shopping
          </h1>
          <Search />
          <SortingButtons
            showFullRoomsData={showFullRoomsData}
            setShowFullRoomsData={setShowFullRoomsData}
          />
        </div>

        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 pb-8 pt-6'>
          <div className='hidden lg:block'>
            <CollapsibleFilters />
          </div>
          {/* Product grid */}
          <div className='lg:col-span-3 grid gap-2'>
            {showFullRoomsData ? <GoodsGrid /> : <GoodsList />}
            <PaginationElement />
          </div>
        </div>
      </div>
    </div>
  );
}
