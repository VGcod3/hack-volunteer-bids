'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { DatePickerWithPresets } from './DatePicker';
import { SelectDemo } from './SelectCategory';

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

export function InputWithLabel({ name, label, type = 'text', ...props }: InputWithLabelProps) {
  return (
    <div className='grid w-full items-center gap-2'>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} id={name} name={name} {...props} />
    </div>
  );
}

export enum AuctionCategory {
  Art,
  Jewelry,
  Collectibles,
  Home,
  Fashion,
  Motors,
  Electronics,
  Toys,
  Travel,
  Other
}

interface Auction {
  name: string;
  description: string;
  category: AuctionCategory | null;
  startPrice: number;
  highestPrice: number;
  placedBy: string;
  StartDate: string;
  FinishDate: string;
}

const AuctionLotPage: React.FC = () => {
  const [newPrice, setNewPrice] = useState(400);

  const onClick = (amount: number) => {
    setNewPrice((prevPrice) => prevPrice + amount);
  };

  const initiaValues: Auction = {
    name: '',
    description: '',
    startPrice: 0,
    category: null,
    highestPrice: 0,
    placedBy: '',
    StartDate: '',
    FinishDate: '',
  };

  const handleCreateAuction = () => {
    // Here, you can implement the logic to create a new auction using the auction state
    // console.log('Creating new auction:', auction);
  };

  return (
    <form className='flex flex-col gap-5 w-full max-w-3xl mx-auto p-8'>
      <h1 className=' text-5xl text-neutral-800 font-semibold'>Create Auction Lot</h1>
      <div className='flex justify-between gap-5 align-bottom items-end'>
        <InputWithLabel name='name' label='Lot name' />
        <SelectDemo />
      </div>
      <div className='flex justify-between'>
        <div className='grid items-center gap-1.5'>
          <Label>Pick a date</Label>
          <DatePickerWithPresets />
        </div>
        <div className='grid flex-1 w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='picture'>Choose a photo</Label>
          <Input id='picture' type='file' multiple className='h-[50px] w-full rounded' />
        </div>
      </div>
      <Label>Start price</Label>
      <div className='flex items-center justify-center space-x-2'>
        <Button
          variant='outline'
          type='button'
          className='h-16 w-16 shrink rounded-full p-0'
          onClick={() => onClick(-10)}
          disabled={newPrice <= 10}>
          <Minus className='h-8 w-8 text-neutral-600' />
          <span className='sr-only'>Decrease</span>
        </Button>
        <div className='flex-1 text-center'>
          <Input
            className='text-7xl font-bold tracking-tighter h-max text-center'
            value={newPrice}
            onChange={(e) => e.target.value}
          />
        </div>
        <Button
          type='button'
          variant='outline'
          size='sm'
          className='h-16 w-16 shrink rounded-full p-0'
          onClick={() => onClick(10)}>
          <Plus className='h-8 w-8 text-neutral-600' />
          <span className='sr-only'>Increase</span>
        </Button>
      </div>
      <InputWithLabel label='Description' name='description' />

      <Button onClick={handleCreateAuction}>Create Auction</Button>
    </form>
  );
};

export default AuctionLotPage;
