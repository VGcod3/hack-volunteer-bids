'use client';
import { ServerCrash } from 'lucide-react';

export const ErrorDisplayComponent = ({ error }: { error: string }) => {
  return (
    <div className='grid gap-4'>
      <p className='text-center text-3xl text-rose-600'>Something went wrong</p>
      <div className='bg-rose-600 p-8 flex flex-col justify-center items-center align-middle text-white rounded-md text-lg text-center'>
        <ServerCrash className='h-12 w-12' />
        {error}
      </div>
    </div>
  );
};
