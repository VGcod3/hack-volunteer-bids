import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FilterIcon } from 'lucide-react';
import CollapsibleFilters from './CollapsibleFilters';

export function MobileFilterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          className=' ml-4 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-6 lg:hidden'>
          <span className='sr-only'>Filters</span>
          <FilterIcon className='h-5 w-5' aria-hidden='true' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
          <DialogDescription>Apply filters to narrow down your search results</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <CollapsibleFilters />
        </div>
      </DialogContent>
    </Dialog>
  );
}
