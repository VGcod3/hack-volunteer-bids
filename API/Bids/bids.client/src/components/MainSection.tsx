'use client';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Link from 'next/link';
import RoomsCardGrid from './RoomCardsGrid';

const MainSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow'>
      <div className='container mx-auto'>
        <div className='mt-8'>
          <AnimatedWrapper>
            <h3 className='text-3xl font-bold text-neutral- text-center mb-6'>Hot Lots!</h3>
          </AnimatedWrapper>
          <RoomsCardGrid />

          <div className='text-center mt-8'>
            <AnimatedWrapper>
              <Link
                href='/auctions'
                className='inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700'>
                Browse more
              </Link>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
