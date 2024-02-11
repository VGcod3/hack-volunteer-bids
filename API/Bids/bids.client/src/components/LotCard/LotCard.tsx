import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface RoomCardProps {
  imageUrl: string;
  name: string;
  highestPrice: number;
  description: string;
  index: number;
}

const LotCard = ({ imageUrl, name, highestPrice, description, index }: RoomCardProps) => {
  return (
    <div className='flex flex-col justify-between overflow-hidden rounded-lg h-full shadow-lg'>
      <Image
        height={48}
        width={330}
        src={imageUrl}
        alt={name}
        className='object-cover w-full h-48'
      />
      <div className=' w-full h-full flex-1 flex flex-col justify-between p-4'>
        <h3 className='text-indigo-600 font-semibold text-lg mb-2'>{name}</h3>
        <span className='bg-neutral-300 rounded text-sm text-neutral-800 px-2 py-1 font-semibold max-w-fit'>
          {highestPrice}$
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

export default LotCard;
