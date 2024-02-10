import { Button } from '@/components/ui/button';
import { lotsdata } from '@/store/lotsData';
import Link from 'next/link';

export default function GoodsLIst() {
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
            className='hidden px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 sm:table-cell'>
            Start price
          </th>
          <th
            scope='col'
            className='hidden px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 sm:table-cell'>
            Highest bid
          </th>
          <th
            scope='col'
            className='hidden px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 sm:table-cell'>
            Auction ends
          </th>
          <th
            scope='col'
            className='px-3 py-3.5 text-left text-sm font-semibold text-neutral-900 table-cell'></th>
        </tr>
      </thead>
      <tbody className='divide-y divide-neutral-200 bg-white'>
        {lotsdata.map((lot, index) => (
          <tr key={index}>
            <td className='pl-4 pr-3 py-3.5 sm:pl-6'>
              <Link href={`/auctions/${index}`} className='text-neutral-700 hover:underline'>
                {lot.name}
              </Link>
            </td>
            <td className='hidden px-3 py-3.5 sm:table-cell text-neutral-600'>{lot.startPrice}</td>
            <td className='hidden px-3 py-3.5 sm:table-cell text-indigo-400'>{lot.highestPrice}</td>
            <td className='hidden px-3 py-3.5 sm:table-cell'>
              {new Date(lot.auctionEnd).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </td>
            <td className='px-3 py-3.5'>
              <Button className='py-2'>
                <Link href={`/auctions/${index}`}>View lot</Link>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
