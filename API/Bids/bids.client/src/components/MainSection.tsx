'use client';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import LotCardsGrid from './LotCardsGrid';

const MainSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow'>
      <div className='container mx-auto'>
        <div className='mt-8'>
          <AnimatedWrapper>
            <h3 className='text-3xl font-bold text-neutral- text-center mb-6'>Hot Lots!</h3>
          </AnimatedWrapper>
          <LotCardsGrid />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
