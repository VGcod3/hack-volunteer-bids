'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { LucideLock, LucideMail, Phone, UserRound, UsersRound } from 'lucide-react';
import InputField from './ui/InputField';

export const RegisterForm = () => {
  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
      <form onSubmit={(e) => e.preventDefault()} className='grid gap-3'>
        <InputField name='firstName' label='First name'>
          <UserRound strokeWidth={1.5} className='p-0.5 text-neutral-700' />
        </InputField>
        <InputField name='lastName' label='Last name'>
          <UserRound strokeWidth={1.5} className='p-0.5 text-neutral-700' />
        </InputField>
        <InputField name='userName' label='Username'>
          <UsersRound strokeWidth={1.5} className='p-0.5 text-neutral-700' />
        </InputField>
        <InputField name='phone' type='tel' label='Phone number'>
          <Phone strokeWidth={1.5} className='p-0.5 text-neutral-700' />
        </InputField>
        <InputField name='email' type='email' label='Email Address'>
          <LucideMail strokeWidth={1.5} className='p-0.5 text-neutral-700' />
        </InputField>
        <InputField name='password' type='password' label='Password' className='flex'>
          <LucideLock strokeWidth={1.5} className='p-0.5 text-neutral-700' />
        </InputField>
        <Button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Sign up
        </Button>
      </form>

      <p className='mt-10 text-center text-sm text-neutral-500'>
        Already have an account?{' '}
        <Link
          href='login'
          className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
          Log in
        </Link>
      </p>
    </div>
  );
};
