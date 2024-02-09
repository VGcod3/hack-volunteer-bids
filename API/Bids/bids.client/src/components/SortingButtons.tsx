'use client';

import { Grid2X2Icon, ListIcon } from 'lucide-react';
import { MobileFilterDialog } from './MobileFilterDialog';
import SortDropdown from './SortDropdown';
import { Button } from './ui/button';

export type SortOption = {
  name: string;
  href: string;
  current: boolean;
};

const sortOptions: SortOption[] = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

interface SortingButtonProps {
  showFullRoomsData: boolean;
  setShowFullRoomsData: (showFullRoomsData: boolean) => void;
}

export default function SortingButtons({
  showFullRoomsData,
  setShowFullRoomsData,
}: SortingButtonProps) {
  return (
    <div className='flex items-center justify-end'>
      <SortDropdown sortOptions={sortOptions} />

      {showFullRoomsData ? (
        <Button
          variant={'ghost'}
          onClick={() => setShowFullRoomsData(false)}
          className=' ml-5 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-7 focus:ring-indigo-600active:shadow-indigo-600 focus:outline-offset-4'>
          <span className='sr-only'>View List</span>
          <ListIcon className='h-5 w-5' aria-hidden='true' />
        </Button>
      ) : (
        <Button
          variant={'ghost'}
          onClick={() => setShowFullRoomsData(true)}
          className=' ml-5 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-7 focus:ring-indigo-600active:shadow-indigo-600 focus:outline-offset-4'>
          <span className='sr-only'>View grid</span>
          <Grid2X2Icon className='h-5 w-5' aria-hidden='true' />
        </Button>
      )}

      <MobileFilterDialog />
    </div>
  );
}
