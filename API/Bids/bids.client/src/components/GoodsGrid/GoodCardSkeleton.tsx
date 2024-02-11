import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export const GoodCardSkeleton = () => (
  <Card className='h-full col-span-1'>
    <Skeleton className='object-cover w-full h-48 rounded-t-md' />
    <div className=' w-full h-auto p-4 grid gap-3'>
      <Skeleton className='h-7 w-44'></Skeleton>
      <Skeleton className='h-5 w-36'></Skeleton>
      <Skeleton className='h-5 w-64'></Skeleton>
      <Skeleton className='h-20 w-64'></Skeleton>
    </div>
  </Card>
);
