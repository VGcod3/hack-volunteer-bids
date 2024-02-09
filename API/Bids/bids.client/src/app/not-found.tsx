'use client';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <div className='flex 2xl:h-screen h-full flex-col bg-neutral-100 lg:relative'>
        <div className='flex flex-grow flex-col'>
          <div className='flex flex-grow flex-co'>
            <div className='mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8'>
              <div className='flex-shrink-0 pt-10 sm:pt-16'>
                <Link
                  href='/'
                  className='inline-flex focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 focus-within:outline-none'>
                  <Image
                    className='h-12 w-auto'
                    width={48}
                    height={48}
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt=''
                  />
                </Link>
              </div>
              <div className='my-auto flex-shrink-0 py-16 sm:py-32'>
                <p className='text-base font-semibold text-indigo-600'>404</p>
                <h1 className='mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-2 text-base text-neutral-500'>
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className='mt-6'>
                  <Link
                    href='/'
                    className='text-base font-medium text-indigo-600 hover:text-indigo-600 focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 focus-within:outline-none'>
                    Go back home
                    <span aria-hidden='true'> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2'>
          <Image
            width={600}
            height={1000}
            className='absolute inset-0 h-full w-full object-cover object-bottom'
            src='https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
