'use client';
import { Clock, CreditCard, ShieldCheck, Tag } from 'lucide-react';
import AnimatedWrapper from './AnimatedWrapper';

const features = [
  {
    name: 'Real-time bidding',
    description:
      'Experience the thrill of bidding in real-time. Get instant updates on the current highest bid and participate in exciting auctions.',
    icon: Clock,
  },
  {
    name: 'Wide range of items',
    description:
      'Discover a wide range of items available for auction. From collectibles to electronics, there is something for everyone.',
    icon: Tag,
  },
  {
    name: 'Secure transactions',
    description:
      'Bid with confidence knowing that all transactions are secure. Our platform ensures the safety of your personal and payment information.',
    icon: ShieldCheck,
  },
  {
    name: 'Easy bidding process',
    description:
      'Place bids easily with just a few clicks. Our intuitive interface makes it simple to participate in auctions and track your bids.',
    icon: CreditCard,
  },
];

export default function FeaturesBlock() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>Bid with Confidence</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
            Discover a world of auctions at your fingertips
          </p>
          <AnimatedWrapper toggleMultiple>
            <p className='mt-6 text-lg leading-8 text-neutral-600'>
              Our platform ensures secure transactions and provides a wide range of items to choose
              from. Place bids easily with just a few clicks and track your bids effortlessly. Join
              us now and immerse yourself in the exciting world of auctions.
            </p>
          </AnimatedWrapper>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature, index) => (
              <AnimatedWrapper key={feature.name} from={index % 2 ? 'right' : 'left'}>
                <div className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-neutral-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                      <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-neutral-600'>
                    {feature.description}
                  </dd>
                </div>
              </AnimatedWrapper>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
