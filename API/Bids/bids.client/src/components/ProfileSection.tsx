'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

import { useDispatch, useSelector } from '@/store/hooks';
import { UserDataUpdate, clearUser, setUser } from '@/store/userSlice';

import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import { Lock, UserRound } from 'lucide-react';
import InputField from './InputField';

const imageUrl =
  'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const validationSchema = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  password: Yup.string(),
});

export default function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user.userData);

  const initialValues: UserDataUpdate = {
    firstName: user?.firstName as string,
    lastName: user?.lastName as string,
    password: user?.password as string,
  };

  const onSubmit = (data: UserDataUpdate) => {
    dispatch(setUser({ email: user?.email, ...data }));

    console.log('Submitted values', data);
    console.log('User in state', user);
  };

  const handleDelete = () => {
    dispatch(clearUser());
    router.push('/');
    console.log('Delete');
  };

  const handleLogout = () => {
    dispatch(clearUser());
    router.push('/');
    console.log('Logout');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
              <Form className='space-y-4 p-4'>
                <h3 className='text-indigo-600 text-thin text-4xl text-bold text-center'>
                  {user?.email}
                </h3>
                <InputField
                  name='firstName'
                  defaultValue={user?.firstName as string}
                  label='First name'
                  className=' pl-14'>
                  <UserRound stroke='currentColor' className='h-8 w-8 ' strokeWidth={0.8} />
                </InputField>
                <InputField
                  name='lastName'
                  defaultValue={user?.lastName as string}
                  label='Last name'
                  className=' pl-14'>
                  <UserRound stroke='currentColor' className='h-8 w-8' strokeWidth={0.8} />
                </InputField>
                <InputField
                  name='password'
                  defaultValue={user?.password as string}
                  label='New password'
                  type='password'
                  className=' pl-14'>
                  <Lock stroke='currentColor' className='h-8  w-8' strokeWidth={0.8} />
                </InputField>

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

                  <Button
                    size={'sm'}
                    type='submit'
                    className='rounded-none rounded-r-md px-3.5 md:px-5'>
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
