'use client';
import { useDispatch, useSelector } from '@/store/hooks';
import { Search } from 'lucide-react';
import { ChangeEvent, FormEvent, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

import { setSearch } from '@/store/filteringData/filterSlice';

const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    search(event.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault(); // Prevent form submission
    // manually trigger the search when the button is clicked
    if (inputRef.current) search(inputRef.current.value);
  };

  const search = (searchInput: string) => {
    dispatch(setSearch(searchInput));
  };

  return (
    <form
      onSubmit={handleSearch}
      className='flex items-center justify-center w-full lg:max-w-md outline-none col-span-1 lg:col-span-2'>
      <Input
        type='text'
        value={searchValue}
        onChange={handleChange}
        className='rounded-r-none h-11'
        placeholder='Search'
        ref={inputRef}
      />
      <Button size={'sm'} className='rounded-l-none'>
        <Search strokeWidth={1.5} />
      </Button>
    </form>
  );
};

export default SearchInput;
