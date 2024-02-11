'use client';
import { Button } from '@/components/ui/button';
import { LucideLock, LucideMail } from 'lucide-react';
import Link from 'next/link';

import { Form, FormikProvider, useFormik } from 'formik';
import InputField from './InputField';

import { useDispatch } from '@/store/hooks';
import { setUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  // regexp form min 1 number, 1 uppercease, 1 lowercase, 1 spec symbol
  password: Yup.string()
    .min(8)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must have a lowecase, uppercase, number and special character',
    ),
});

export type LoginType = {
  email: string;
  password: string;
};

const initialValues: LoginType = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data: LoginType) => {
    dispatch(setUser({ firstName: '', lastName: '', ...data }));
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
          <InputField name='email' type='email' label='Email Address'>
            <LucideMail strokeWidth={1.5} className='p-0.5 text-neutral-700' />
          </InputField>
          <InputField name='password' type='password' label='Password' className='flex'>
            <LucideLock strokeWidth={1.5} className='p-0.5 text-neutral-700' />
          </InputField>
          <Button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Sign in
          </Button>
        </Form>
      </FormikProvider>

      <p className='mt-10 text-center text-sm text-neutral-500'>
        Do not have an account?{' '}
        <Link
          href='register'
          className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
          Register
        </Link>
      </p>
    </div>
  );
};
