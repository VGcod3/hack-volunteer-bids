'use client';

import { setCurrentPage } from '@/store/filteringData/filterSlice';
import { useDispatch } from '@/store/hooks';
import { Grid2X2Icon, ListIcon } from 'lucide-react';
import { MobileFilterDialog } from './MobileFilterDialog';
import SortDropdown from './SortDropdown';
import { Button } from './ui/button';

interface SortingButtonProps {
  showFullRoomsData: boolean;
  setShowFullRoomsData: (showFullRoomsData: boolean) => void;
}

export default function SortingButtons({
  showFullRoomsData,
  setShowFullRoomsData,
}: SortingButtonProps) {
  const dispatch = useDispatch();

  const handleToggleView = () => {
    dispatch(setCurrentPage(1));

    setShowFullRoomsData(!showFullRoomsData);
  };

  return (
    <div className='flex items-center justify-end'>
      <SortDropdown />

      {showFullRoomsData ? (
        <Button
          variant={'ghost'}
          onClick={handleToggleView}
          className=' ml-5 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-7 focus:ring-indigo-600active:shadow-indigo-600 focus:outline-offset-4'>
          <span className='sr-only'>View List</span>
          <ListIcon className='h-5 w-5' aria-hidden='true' />
        </Button>
      ) : (
        <Button
          variant={'ghost'}
          onClick={handleToggleView}
          className=' ml-5 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-7 focus:ring-indigo-600active:shadow-indigo-600 focus:outline-offset-4'>
          <span className='sr-only'>View grid</span>
          <Grid2X2Icon className='h-5 w-5' aria-hidden='true' />
        </Button>
      )}

      <MobileFilterDialog />
    </div>
  );
}
