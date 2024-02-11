'use client';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from './ui/button';

import { Checkbox } from '@/components/ui/checkbox';
import { filterCategories, setCurrentPage } from '@/store/filteringData/filterSlice';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { PriceFilter } from './PriceFilter';

import { CategoriesEnum, CategoryOption } from '@/store/filteringData/filterTypes';

const FilterItem = ({ children, name }: { children: React.ReactElement; name: string }) => {
  return (
    <Accordion.Item value={name} className='w-full'>
      <Accordion.AccordionTrigger asChild className='group flex  justify-between'>
        <Button variant={'outline'} className='w-full bg-white'>
          {name}
          <ChevronDownIcon
            className='ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180'
            aria-hidden
          />
        </Button>
      </Accordion.AccordionTrigger>
      <Accordion.AccordionContent className='py-2 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up'>
        {children}
      </Accordion.AccordionContent>
    </Accordion.Item>
  );
};

const PickCategories = ({ category }: { category: CategoryOption }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (value: CategoriesEnum) => {
    dispatch(filterCategories({ value }));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className='items-top flex space-x-2 p-1' key={category.value}>
      <Checkbox
        id={category.label}
        checked={category.checked}
        onCheckedChange={() => handleFilterChange(category.value)}
      />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor={category.label}
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          {category.label}
        </label>
      </div>
    </div>
  );
};

export default function CollapsibleFilters() {
  const categories = useSelector((state: RootState) => state.filter.categories);

  return (
    <Accordion.Root type='multiple' className='flex flex-col gap-3'>
      <FilterItem name={'Price'}>
        <PriceFilter />
      </FilterItem>
      <FilterItem name={'Categories'}>
        <>
          {categories.map((category) => (
            <PickCategories key={category.value} category={category} />
          ))}
        </>
      </FilterItem>
    </Accordion.Root>
  );
}
