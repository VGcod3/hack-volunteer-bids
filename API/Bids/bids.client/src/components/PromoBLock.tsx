import AnimatedWrapper from '@/components/AnimatedWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const offers = [
  { name: 'Bid on a painting', description: 'Get a chance to own a masterpiece', href: '#' },
  {
    name: 'Place a bid on a vintage car',
    description: 'Experience the thrill of classic automobiles',
    href: '#',
  },
  {
    name: 'Join the auction for rare collectibles',
    description: 'Discover unique items from around the world',
    href: '#',
  },
];

export default function Example() {
  return (
    <div className='bg-white'>
      <div className='flex flex-col border-b border-neutral-200 lg:border-0'>
        <nav aria-label='Offers' className='order-last lg:order-first'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <ul
              role='list'
              className='grid grid-cols-1 divide-y divide-neutral-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x'>
              {offers.map((offer) => (
                <li key={offer.name} className='flex flex-col'>
                  <a
                    href={offer.href}
                    className='relative flex flex-1 flex-col justify-center bg-white py-6 px-4 text-center focus:z-10'>
                    <p className='text-sm text-neutral-500'>{offer.name}</p>
                    <p className='font-semibold text-neutral-900'>{offer.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className='relative'>
          <div
            aria-hidden='true'
            className='absolute hidden h-full w-1/2 bg-neutral-100 lg:block'
          />
          <div className='relative bg-neutral-100 lg:bg-transparent'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8'>
              <div className='mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64'>
                <div className='lg:pr-16'>
                  <AnimatedWrapper from='left'>
                    <h2 className='text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl xl:text-6xl'>
                      Make a bargain
                    </h2>
                  </AnimatedWrapper>
                  <AnimatedWrapper from='left' delay={0.1} toggleMultiple>
                    <p className='mt-4 text-xl text-neutral-600'>
                      Find and bid on your next auction item with our easy-to-use platform.
                    </p>
                  </AnimatedWrapper>
                  <div className='mt-6'>
                    <AnimatedWrapper from='left' delay={0.3} toggleMultiple>
                      <Link href='/auctions'>
                        <Button>Browse auctions</Button>
                      </Link>
                    </AnimatedWrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2'>
            <Image
              width={1920}
              height={380}
              src='https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg'
              alt=''
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
