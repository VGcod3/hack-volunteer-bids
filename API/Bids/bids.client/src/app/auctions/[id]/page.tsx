import { PhotoCarousel } from '@/components/PhotoCarousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import Link from 'next/link';

import { lotsdata } from '@/store/lotsData';

const lotData = lotsdata[0];

export default function Page() {
  return (
    <div className='flex flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div className='col-span-1 p-8'>
          <PhotoCarousel />
        </div>
        <Card className='col-span-1 p-8 m-8 flex flex-col justify-between gap-5 lg:gap-0'>
          <h2 className='text-4xl text-indigo-600 font-bold'>{lotData.name}</h2>
          <p className='text-neutral-700'>{lotData.description}</p>
          <p>
            Start Price:
            <span className='underline ml-2'>
              {lotData.startPrice} {lotData.currency}
            </span>
          </p>
          <Link href='/profile'>
            Published By:
            <Button
              variant={'outline'}
              size={'sm'}
              className='flex gap-2 align-middle items-center'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {lotData.placedBy}
            </Button>
          </Link>

          <p className='text-indigo-600'>
            Highest Price: {lotData.highestPrice} {lotData.currency}
          </p>

          <div className=' text-neutral-700'>
            <p className='text-sm text-neutral-600'>Auction Stared:</p>
            <p className='font-mono'>{format(lotData.auctionStart, 'dd MMM yyyy HH:mm')}</p>
            <p className='text-sm text-neutral-600'>Auction End:</p>
            <p className='font-mono'>{format(lotData.auctionEnd, 'dd MMM yyyy HH:mm')}</p>
          </div>

          <Button>Make a bid</Button>
        </Card>
      </div>
    </div>
  );
}
