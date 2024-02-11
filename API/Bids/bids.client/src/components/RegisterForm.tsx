'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { Form, FormikProvider, useFormik } from 'formik';
import { LucideLock, LucideMail, UserRound } from 'lucide-react';
import InputField from './InputField';

import { useDispatch } from '@/store/hooks';
import { UserData, setUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required').email(),
  password: Yup.string()
    .required('Password is required')
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must have a lowecase, uppercase, number and special character',
    ),
});

const initialValues: UserData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (data: UserData) => {
    dispatch(setUser(data));

    console.log(data);
    router.push('/profile');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm '>
      <FormikProvider value={formik}>
        <Form className='grid gap-3'>
          <InputField name='firstName' label='First name'>
            <UserRound strokeWidth={1.5} className='p-0.5 text-neutral-700' />
          </InputField>
          <InputField name='lastName' label='Last name'>
            <UserRound strokeWidth={1.5} className='p-0.5 text-neutral-700' />
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
        </Form>
      </FormikProvider>

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
