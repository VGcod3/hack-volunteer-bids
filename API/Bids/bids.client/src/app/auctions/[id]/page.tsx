'use client';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import Link from 'next/link';

import { useGetLotQuery } from '@/api/auctions/auction.api';

import BidForm from '@/components/BidForm';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';

const LotSkeleton = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
      <Skeleton className='col-span-1 md:p-8 h-[540px] m-16'></Skeleton>
      <Card className='col-span-1 p-8 m-16 mx-4 lg:mr-16 h-[540px] flex flex-col gap-5 '>
        <Skeleton className='h-14 w-4/5' />
        <Skeleton className='h-16 w-full' />
        <Skeleton className='w-40 h-10' />
        <Skeleton className='h-40 w-64' />

        <Button disabled>Make a bid</Button>
      </Card>
    </div>
  );
};

export default function Page() {
  const { id } = useParams();

  const { isLoading, error, data: lotData } = useGetLotQuery(id as string, true);

  if (isLoading) {
    return <LotSkeleton />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className='flex flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='grid lg:grid-cols-2 grid-cols-1 '>
          <div className='col-span-1 md:p-8'>
            <PhotoCarousel />
          </div>
          <Card className='col-span-1 p-8 my-8 md:m-8 flex flex-col gap-5 h-min'>
            <h2 className='text-4xl text-indigo-600 font-bold'>{lotData?.name}</h2>
            <p className='text-neutral-700'>{lotData?.description}</p>
            <p>
              Start Price:
              <span className='underline ml-2'>{lotData?.startPrice}$</span>
            </p>

            <Link href='/profile' className=' text-neutral-700 text-md '>
              Published By:
              <Button
                variant={'outline'}
                size={'sm'}
                className='flex gap-2 align-middle items-center mt-3'>
                <Avatar>
                  <AvatarImage src='https://github.com/shadcn.png' />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {lotData?.placedBy}
              </Button>
            </Link>
            <p className='text-indigo-600'>Highest Price: {lotData?.highestPrice} $</p>

            <div className=' text-neutral-700'>
              <p className='text-sm text-neutral-600'>Auction Stared:</p>
              <p className='font-mono'>
                {format(lotData?.auctionStart ?? 'src/store/lotsData.ts', 'dd MMM yyyy HH:mm')}
              </p>
              <p className='text-sm text-neutral-600'>Auction End:</p>
              <p className='font-mono'>
                {format(lotData?.auctionEnd ?? 'src/store/lotsData.ts', 'dd MMM yyyy HH:mm')}
              </p>
            </div>

            {/* <Button>Make a bid</Button> */}
            <BidForm />
          </Card>
        </div>
      </div>
    </>
  );
}
