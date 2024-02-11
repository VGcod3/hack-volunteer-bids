'use client';
import { setCurrentPage, setPriceFilter } from '@/store/filteringData/filterSlice';
import { RootState } from '@/store/store';
import * as Slider from '@radix-ui/react-slider';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './ui/input';

export const PriceFilter = () => {
  const priceFilter = useSelector((state: RootState) => state.filter.priceFilter);
  const priceValue = useSelector((state: RootState) => state.filter.priceFilter.value);
  const dispatch = useDispatch();

  const handlePriceChange = (newValues: number[]) => {
    dispatch(setPriceFilter({ min: newValues[0], max: newValues[1] }));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className='space-y-4'>
      <Slider.Root
        defaultValue={priceValue}
        onValueChange={handlePriceChange}
        step={1}
        min={priceFilter.min}
        max={priceFilter.max}
        value={priceValue}
        className='relative flex  rounded-lg  items-center select-none touch-none w-full h-5'>
        <Slider.Track className=' bg-neutral-200 relative grow rounded-full h-1' />
        <Slider.Range className='absolute bg-indigo-600 rounded-full h-1' />

        <Slider.Thumb
          className='block w-5 h-5 bg-white rounded-full outline-none shadow-[0_0_15px_5px] shadow-neutral-300 focus:ring-indigo-600focus:outline-2'
          aria-label='Volume'
        />

        <Slider.Thumb
          className='block w-5 h-5 bg-white rounded-full outline-none shadow-[0_0_15px_5px] shadow-neutral-300 focus:ring-indigo-600focus:outline-2'
          aria-label='Volume'
        />
      </Slider.Root>
      <div className='mt-2 flex justify-between items-center text-sm text-neutral-500'>
        <div className='relative mt-2'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <span className='text-neutral-500 sm:text-sm'>$</span>
          </div>
          <Input
            value={priceValue[0]}
            onChange={(e) => handlePriceChange([parseInt(e.target.value), priceValue[1]])}
            type='number'
            className='w-full border-none py-1.5 pl-7 bg-transparent'
            placeholder={priceFilter.min.toString()}
          />
        </div>
        <div className='relative mt-2'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <span className='text-neutral-500 sm:text-sm'>$</span>
          </div>
          <Input
            value={priceValue[1]}
            onChange={(e) => handlePriceChange([priceValue[0], parseInt(e.target.value)])}
            type='number'
            className='w-full border-none py-1.5 pl-7 bg-transparent'
            placeholder={priceFilter.max.toString()}
          />
        </div>
      </div>
    </div>
  );
};
