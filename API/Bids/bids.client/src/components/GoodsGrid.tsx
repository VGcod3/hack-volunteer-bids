import { lotsdata } from '@/store/lotsData';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';

export default function GoodsGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {lotsdata.map((lot, index) => (
        <Link href={`/auctions/${index}`} key={index} className=''>
          <Card className='h-full hover:shadow-2xl transition-all hover:scale-[102%]'>
            <Image
              height={48}
              width={330}
              src={lot.images[0]}
              alt={lot.name}
              className='object-cover w-full h-48 rounded-t-md'
            />
            <div className=' w-full h-auto p-4'>
              <h3 className='text-indigo-600 font-semibold text-lg mb-2'>{lot.name}</h3>
              <div className='flex gap-3'>
                Highest bid:
                <p className='text-neutral-800 font-bold text-sm'>{lot.highestPrice}</p>
                <p className='text-neutral-700 text-sm'>{lot.currency}</p>
              </div>
              <p className='text-neutral-700 text-sm my-2'>
                Auction ends:{' '}
                {new Date(lot.auctionEnd).toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </p>
              <p className='text-neutral-700 text-sm my-2'>{lot.description}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
