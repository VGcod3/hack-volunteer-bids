'use client';
import { useSelector } from '@/store/hooks';
import { Avatar } from '@radix-ui/react-avatar';
import * as Dialog from '@radix-ui/react-dialog';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const brandName = 'INT20H BIDS';

type MenuItem = {
  name: string;
  href: string;
};

const navigation: MenuItem[] = [
  { name: 'Home', href: '/home' },
  { name: 'Auctions', href: '/auctions' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const user = useSelector((state) => state.user.userData);

  return (
    <header>
      <Dialog.Root>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <Link href={'/'} className='flex align-middle items-center gap-3'>
              <Image
                width={32}
                height={32}
                className='h-8 w-8'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Logo'
              />

              <h1 className='text-lg font-semibold tracking-wide leading-none transition-all bg-gradient-to-r text-transparent bg-clip-text from-indigo-600 to-violet-500'>
                {brandName}
              </h1>
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <Dialog.Trigger asChild>
              <Button variant={'ghost'} onClick={() => setMobileMenuOpen(true)}>
                <span className='sr-only'>Open main menu</span>
                <HamburgerMenuIcon className='h-6 w-6' aria-hidden='true' />
              </Button>
            </Dialog.Trigger>
          </div>
          <div className='hidden lg:flex lg:gap-x-12 flex-1'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='cursor-pointer text-sm font-semibold leading-6 text-neutral-800 hover:text-indigo-600 transition-all hover:scale-105  px-2'>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className='p-0 rounded-full' variant={'outline'}>
                    <Avatar className='bg-indigo-600 h-10 w-10 rounded-full' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-44'>
                  <Link href={'/profile'}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href={'/login'}
                className='cursor-pointer text-sm font-semibold leading-6 text-neutral-800 hover:text-indigo-600 transition-all'>
                Log in <span aria-hidden='true'>&rarr;</span>
              </Link>
            )}
          </div>
        </nav>

        <Dialog.Portal>
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm'
                  onClick={() => setMobileMenuOpen(false)}
                />

                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: '0%' }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.2 }}
                  className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10'>
                  <div>
                    <div className='flex items-center justify-end'>
                      <Button variant={'ghost'} onClick={() => setMobileMenuOpen(false)}>
                        <span className='sr-only'>Close menu</span>
                        <Cross1Icon className='h-6 w-6' aria-hidden='true' />
                      </Button>
                    </div>
                    <div className='mt-6 flow-root'>
                      <div className='-my-6 divide-y divide-neutral-500/10'>
                        <div className='space-y-2 py-6'>
                          {navigation.map((item) => (
                            <Link href={item.href} tabIndex={-1}>
                              <Button
                                variant={'ghost'}
                                className='w-full'
                                onClick={() => setMobileMenuOpen(false)}>
                                {item.name}
                              </Button>
                            </Link>
                          ))}
                        </div>
                        <div className='py-6'>
                          <Link href={'/login'}>
                            <Button className='w-full' onClick={() => setMobileMenuOpen(false)}>
                              Log in
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
