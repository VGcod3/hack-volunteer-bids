'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { setCurrentPage, setSortBy } from '@/store/filteringData/filterSlice';
import { SortOptionsEnum } from '@/store/filteringData/filterTypes';
import { useDispatch, useSelector } from '@/store/hooks';
import { ArrowDownNarrowWideIcon } from 'lucide-react';

const SortDropdown = () => {
  const sortOptionsArray = Object.values(SortOptionsEnum);

  const sortBy = useSelector((state) => state.filter.sortBy);
  const dispatch = useDispatch();

  const handleSortBy = (value: string) => {
    dispatch(setSortBy(value));
    dispatch(setCurrentPage(1));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='text-neutral-600'>
        <Button variant={'ghost'} className='py-1.5 px-3 flex gap-2'>
          Sort
          <ArrowDownNarrowWideIcon strokeWidth={1.5} className='text-neutral-400' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel className='ml-6'>Choose a sort options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortBy} onValueChange={handleSortBy}>
          {sortOptionsArray.map((option) => (
            <DropdownMenuRadioItem key={option} value={option}>
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
