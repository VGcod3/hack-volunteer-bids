'use client';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

import { Form, FormikProvider } from 'formik';
import { Lock, MailIcon, PhoneIcon, UserRound } from 'lucide-react';
import * as Yup from 'yup';
import { Input } from './ui/input';

const imageUrl =
  'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type userType = {
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  password: string;
};

const user: userType = {
  username: 'John Doe',
  email: 'fakemail@mail.com',
  phone: ' +380 99 999 99 99',
  firstName: 'John',
  lastName: 'Doe',
  password: '********',
};

interface profileFieldProps {
  children: ReactNode;
  type?: string;
  placeholder?: string;
  name: string;
}

const initialValues = {
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  phone: user.phone,
  username: user.username,
  password: '*******',
};

const validationSchema = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email('Invalid email address'),
  phone: Yup.string().matches(/^[\d-()+ ]+$/, 'Invalid phone number'),
  username: Yup.string(),
  password: Yup.string(),
});
const ProfileField = ({
  children,
  type = 'text',
  name,
  placeholder = `Ener your ${name}`,
}: profileFieldProps) => {
  return (
    <div className='flex align-bottom items-end justify-between gap-2 w-full'>
      <div className='h-full w-auto flex align-bottom'>{children}</div>
      <div className='w-full flex-1'>
        <div className='flex justify-between'>
          <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
            {name}
          </label>
          <span className='text-sm text-gray-500' id={name}>
            Optional
          </span>
        </div>
        <div className='mt-2 flex align-middle gap-10 justify-between '>
          <Input
            type={type}
            name={name}
            id={name}
            defaultValue={user[name as keyof typeof user]}
            placeholder={placeholder}
            disabled={name == 'password'}
            className='block w-full rounded-md border-gray-300 shadow-sm transition-all duration-200 ease-in-out focus:border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
          />
        </div>
      </div>
    </div>
  );
};

export default function Profile() {
  const onSubmit = async (values: any) => {
    console.log('Submit', values);
  };

  const handleDelete = () => {
    console.log('Delete');
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  const formik = {
    initialValues,
    validationSchema,
    onSubmit,
  };

  return (
    <div>
      <div className='relative overflow-hidden bg-indigo-700 pb-32'>
        <div
          aria-hidden='true'
          className={classNames(
            'absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0',
          )}>
          <div className='absolute inset-0 flex'>
            <div className='h-full w-1/2' style={{ backgroundColor: '#0a527b' }} />
            <div className='h-full w-1/2' style={{ backgroundColor: '#065d8c' }} />
          </div>
          <div className='relative flex justify-center'>
            <svg
              className='flex-shrink-0'
              width={1750}
              height={308}
              viewBox='0 0 1750 308'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M284.161 308H1465.84L875.001 182.413 284.161 308z' fill='#0369a1' />
              <path d='M1465.84 308L16.816 0H1750v308h-284.16z' fill='#065d8c' />
              <path d='M1733.19 0L284.161 308H0V0h1733.19z' fill='#0a527b' />
              <path d='M875.001 182.413L1733.19 0H16.816l858.185 182.413z' fill='#0a4f76' />
            </svg>
          </div>
        </div>
        <header className='relative py-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold tracking-tight text-white'>Profile settings</h1>
          </div>
        </header>
      </div>
      <div className='relative -mt-32'>
        <div className='mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16'>
          <div className='overflow-hidden rounded-lg bg-white shadow'>
            <div className='w-full flex p-10 justify-between items-center'>
              <h2 className='text-3xl md:text-5xl xl:text-7xl font-bold font-mono  text-gray-800'>
                Redact profile
              </h2>
              <img className='md:h-60 md:w-60 w-24 h-24 rounded-full' src={imageUrl} alt='' />
            </div>
            <hr />
            <FormikProvider value={formik}>
              <Form className='space-y-4 p-4' onSubmit={(e) => e.preventDefault()}>
                <h3 className='text-indigo-600 text-thin text-4xl text-bold text-center'>
                  {user.username}
                </h3>
                <ProfileField name='firstName'>
                  <UserRound stroke='currentColor' className='h-10 w-10 ' strokeWidth={0.8} />
                </ProfileField>
                <ProfileField name='lastName'>
                  <UserRound stroke='currentColor' className='h-10 w-10' strokeWidth={0.8} />
                </ProfileField>
                <ProfileField name='email' type='email'>
                  <MailIcon stroke='currentColor' className='h-10  w-10' strokeWidth={0.8} />
                </ProfileField>
                <ProfileField name='phone' type='tel'>
                  <PhoneIcon stroke='currentColor' className='h-10  w-10' strokeWidth={0.8} />
                </ProfileField>
                <ProfileField name='password' type='password'>
                  <Lock stroke='currentColor' className='h-10  w-10' strokeWidth={0.8} />
                </ProfileField>

                <hr className='my-4' />

                <div className='flex w-full justify-center md:justify-end'>
                  <Button
                    onClick={handleDelete}
                    className='rounded-none rounded-l-md text-white  px-3.5 md:px-5'
                    size={'sm'}
                    variant='destructive'>
                    Delete account
                  </Button>

                  <Button
                    size={'sm'}
                    onClick={handleLogout}
                    variant='outline'
                    className='rounded-none px-3.5 md:px-5'>
                    Log out
                  </Button>

                  <Button size={'sm'} className='rounded-none rounded-r-md px-3.5 md:px-5'>
                    Update data
                  </Button>
                </div>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
