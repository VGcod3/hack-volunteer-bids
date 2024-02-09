import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

interface RoomCardProps {
  imageUrl: string;
  title: string;
  occupancy: string;
  description: string;
  index: number;
}

const RoomCard = ({ imageUrl, title, occupancy, description, index }: RoomCardProps) => {
  return (
    <div className='block overflow-hidden rounded-lg shadow-lg'>
      <Image
        height={48}
        width={330}
        src={imageUrl}
        alt={title}
        className='object-cover w-full  h-48'
      />
      <div className='bg-neutral-100 w-full h-auto p-4'>
        <h3 className='text-indigo-600 font-semibold text-lg mb-2'>{title}</h3>
        <span className='bg-neutral-300 rounded text-sm text-neutral-800 px-2 py-1 font-semibold'>
          {occupancy}
        </span>
        <p className='text-neutral-700 text-sm my-2'>{description}</p>
        <Link href={`/auctions`} tabIndex={-1}>
          <Button size={'sm'} className='w-full '>
            Make a bid
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
