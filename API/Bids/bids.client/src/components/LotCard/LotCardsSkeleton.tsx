'use client';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { Skeleton } from '@/components/ui/skeleton';

export const LotCardsSkeleton = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {[...Array(6)].map((_, index) => (
        <AnimatedWrapper key={index}>
          <div className='flex flex-col justify-between overflow-hidden rounded-lg h-full shadow-lg'>
            <Skeleton className='object-cover w-full h-48' />
            <div className=' w-full h-full flex-1 flex flex-col justify-between p-4'>
              <Skeleton className='w-44 h-8 mb-2' />
              <Skeleton className='w-10 h-6' />
              <Skeleton className='w-full h-12 my-2' />
              <Skeleton className='w-full h-8' />
            </div>
          </div>
        </AnimatedWrapper>
      ))}
    </div>
  );
};
