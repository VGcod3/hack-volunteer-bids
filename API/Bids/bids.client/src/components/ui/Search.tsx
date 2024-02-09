'use client';
import { Search } from 'lucide-react';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Button } from './button';
import { Input } from './input';

// Custom debounce function
const useDebounce = (callback: Function, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      // cleanup function to clear the timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (...args: any[]) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault(); // Prevent form submission
    // manually trigger the search when the button is clicked
    if (inputRef.current) search(inputRef.current.value);
  };

  const search = (searchInput: string) => {
    console.log('Searching:', searchInput);
  };

  const debouncedSearch = useDebounce(search, 300);

  return (
    <form
      onSubmit={handleSearch}
      className='flex items-center justify-center w-full lg:max-w-md outline-none col-span-1 lg:col-span-2'>
      <Input
        type='text'
        value={searchTerm}
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
