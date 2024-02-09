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
import { setSortBy } from '@/store/filterSlice';
import { useDispatch, useSelector } from '@/store/hooks';
import { ArrowDownNarrowWideIcon } from 'lucide-react';
import { SortOption } from './SortingButtons';

const SortDropdown = ({ sortOptions }: { sortOptions: SortOption[] }) => {
  const sortBy = useSelector((state) => state.filter.sortBy);
  const dispatch = useDispatch();

  const handleSortBy = (value: string) => {
    dispatch(setSortBy(value));
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
          {sortOptions.map((option) => (
            <DropdownMenuRadioItem key={option.name} value={option.name}>
              {option.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
