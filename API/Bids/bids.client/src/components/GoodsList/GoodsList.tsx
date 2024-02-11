import { useGetLotsQuery } from '@/api/auctions/auction.api';
import { Button } from '@/components/ui/button';
import { useSelector } from '@/store/hooks';
import Link from 'next/link';
import { useEffect } from 'react';
import { Skeleton } from '../ui/skeleton';

const TableListSkeleton = () => (
  <tr>
    <td className='pl-4 pr-3 py-3.5 sm:pl-6 '>
      <Skeleton className='w-44 h-8'></Skeleton>
    </td>
    <td className='hidden px-3 py-3.5 sm:table-cell '>
      <Skeleton className='h-8 w-12 mx-auto' />
    </td>
    <td className='hidden px-3 py-3.5 sm:table-cell '>
      <Skeleton className='h-8 w-16 mx-auto' />
    </td>
    <td className='hidden px-3 py-3.5 sm:table-cell'>
      <Skeleton className='h-8 w-28  mx-auto' />
    </td>
    <td className='px-3 py-3.5  mx-autos'>
      <Button disabled className='py-2'>
        View lot
      </Button>
    </td>
  </tr>
);

export default function GoodsLIst() {
  const filter = useSelector((state) => state.filter);
  const { data: lotsList, isLoading, error, fetchData } = useGetLotsQuery(filter, true);

  useEffect(() => {
    fetchData();
  }, [filter]);

  if (isLoading)
    return (
      <table className='min-w-full divide-y divide-neutral-300'>
        <thead className='bg-neutral-50'>
          <tr>
            <th
              scope='col'
              className='py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-neutral-900 sm:pl-6'>
              Lot name
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 sm:table-cell'>
              Start price
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 sm:table-cell'>
              Highest bid
            </th>
            <th
              scope='col'
              className='hidden px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 sm:table-cell'>
              Auction ends
            </th>
            <th
              scope='col'
              className='px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 table-cell'></th>
          </tr>
        </thead>
        <tbody className='divide-y divide-neutral-200 bg-white'>
          {Array.from({ length: 6 }, (_, i) => (
            <TableListSkeleton key={i} />
          ))}
        </tbody>
      </table>
    );

  if (error) return 'An error occurred';

  return (
    <table className='min-w-full divide-y divide-neutral-300'>
      <thead className='bg-neutral-50'>
        <tr>
          <th
            scope='col'
            className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-6'>
            Lot name
          </th>
          <th
            scope='col'
            className='hidden px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 sm:table-cell'>
            Start price
          </th>
          <th
            scope='col'
            className='hidden px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 sm:table-cell'>
            Highest bid
          </th>
          <th
            scope='col'
            className='hidden px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 sm:table-cell'>
            Auction ends
          </th>
          <th
            scope='col'
            className='px-3 py-3.5 text-center text-sm font-semibold text-neutral-900 table-cell'></th>
        </tr>
      </thead>
      <tbody className='divide-y divide-neutral-200 bg-white'>
        {lotsList.map((lot, index) => (
          <tr key={index}>
            <td className='pl-4 pr-3 py-3.5 sm:pl-6'>
              <Link href={`/auctions/${lot.id}`} className='text-neutral-700 hover:underline'>
                {lot.name}
              </Link>
            </td>
            <td className='hidden px-3 py-3.5 sm:table-cell text-neutral-600 text-center'>
              {lot.startPrice}
            </td>
            <td className='hidden px-3 py-3.5 sm:table-cell text-indigo-400 text-center'>
              {lot.highestPrice}
            </td>
            <td className='hidden px-3 py-3.5 sm:table-cell text-center'>
              {new Date(lot.auctionEnd).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </td>
            <td className='px-3 py-3.5'>
              <Link href={`/auctions/${lot.id}`} tabIndex={-1}>
                <Button className='py-2'>View lot</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
