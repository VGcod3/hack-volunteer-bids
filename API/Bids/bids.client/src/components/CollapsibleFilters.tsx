'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from './ui/button';

import { Checkbox } from '@/components/ui/checkbox';
import { setFiltersOptions } from '@/store/filterSlice';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { PriceFilter } from './PriceFilter';

import { z } from 'zod';

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

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

type PickItemsFilterProps = {
  index: number;
  option: { value: string; label: string; checked: boolean };
  filterId: string;
};

const PickItemsFilter = ({ index, option, filterId }: PickItemsFilterProps) => {
  const dispatch = useDispatch();

  const handleFilterChange = (filterId: string, optionValue: string) => {
    dispatch(setFiltersOptions({ filterId, optionValue }));
  };

  return (
    <div className='items-top flex space-x-2 p-1' key={index}>
      <Checkbox
        id={option.label}
        checked={option.checked}
        onCheckedChange={() => handleFilterChange(filterId, option.value)}
      />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor={option.value}
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          {option.label}
        </label>
      </div>
    </div>
  );
};

export default function CollapsibleFilters() {
  const filters = useSelector((state: RootState) => state.filter.filters);
  const priceFilter = useSelector((state: RootState) => state.filter.priceFilter);

  return (
    <Accordion.Root type='multiple' className='flex flex-col gap-3'>
      <FilterItem name={priceFilter.name}>
        <PriceFilter />
      </FilterItem>
      {filters.map((filter) => (
        <FilterItem key={filter.id} name={filter.name}>
          <>
            {filter.options.map((option, index) => (
              <PickItemsFilter index={index} option={option} filterId={filter.id} />
            ))}
          </>
        </FilterItem>
      ))}
    </Accordion.Root>
  );
}
