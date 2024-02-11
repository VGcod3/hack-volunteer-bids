import { useGetLotsQuery } from '@/api/auctions/auction.api';
import { useSelector } from '@/store/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Card } from '../ui/card';
import { GoodCardSkeleton } from './GoodCardSkeleton';

export default function GoodsGrid() {
  const filter = useSelector((state) => state.filter);
  const { data: lotsList, isLoading, error, fetchData } = useGetLotsQuery(filter, true);
  console.log(lotsList);

  useEffect(() => {
    fetchData();

  }, [filter]);
  if (isLoading)
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Array.from({ length: 6 }, (_, i) => (
          <GoodCardSkeleton key={i} />
        ))}
      </div>
    );

  if (error) return 'An error occurred';
  console.log(lotsList);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {lotsList.map((lot, index) => (
        <Link href={`/auctions/${index}`} key={index} className=''>
          <Card className='h-full hover:shadow-2xl transition-all hover:scale-[102%]'>
            <Image
              src={""}
              height={48}
              width={330}
              alt={lot.name}
              className='object-cover w-full h-48 rounded-t-md'
            />
            <div className=' w-full h-auto p-4'>
              <h3 className='text-indigo-600 font-semibold text-lg mb-2'>{lot.name}</h3>
              <div className='flex gap-3'>
                Highest bid:
                <p className='text-neutral-800 font-bold text-sm'>{lot.highestPrice}</p>
                <p className='text-neutral-700 text-sm'>$</p>
              </div>
              <p className='text-neutral-700 text-sm my-2'>
                Auction ends:{' '}
                {new Date(lot.FinishDate).toLocaleString()}
              </p>
              <p className='text-neutral-700 text-sm my-2'>{lot.description}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
