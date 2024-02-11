'use state';
import { useGetLotQuery } from '@/api/auctions/auction.api';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { LockClosedIcon } from '@radix-ui/react-icons';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { Minus, Plus } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Input } from './ui/input';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required(),
  name: Yup.string().required(),
  cardNumber: Yup.string().min(16).required(),
  expirationDate: Yup.string().required(),
  cvc: Yup.string().required().length(3),
});

export default function BidForm() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const { data, isLoading, error, fetchData } = useGetLotQuery(id as string, true);

  const [newPrice, setNewPrice] = useState<number>(500);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const highestBid = data?.highestPrice;

    setNewPrice(highestBid ?? 500 + 50);
  }, [data]);

  const handlePayment = () => {
    console.log('Payment', newPrice);
    setOpen(false);
    formik.resetForm();
  };

  const onSubmit = (values: any) => {
    console.log('Payment', newPrice);
    console.log('Submitted values', values);
    setOpen(false);
    formik.resetForm();
  };

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      name: '',
      cardNumber: '',
      expirationDate: '',
      cvc: '',
    },
    onSubmit,
  });

  function onClick(adjustment: number) {
    setNewPrice(newPrice + adjustment);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Make a bid</Button>
        </DialogTrigger>
        <DialogContent>
          <section aria-labelledby='payment-heading' className='flex-auto overflow-y-scroll'>
            <h2 id='payment-heading' className='sr-only'>
              Payment and shipping details
            </h2>

            <div className='mx-auto max-w-lg pt-8'>
              <FormikProvider value={formik}>
                <Form>
                  <Button
                    onClick={() => {
                      console.log(formik.values);
                      handlePayment();
                    }}
                    type='button'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
                    formNoValidate // Add formNoValidate attribute to avoid validation
                  >
                    <span className='sr-only'>Pay with Apple Pay</span>
                    <svg
                      className='h-5 w-auto'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 50 20'>
                      <path d='M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z' />
                    </svg>
                  </Button>

                  <div className='relative mt-8'>
                    <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                      <div className='w-full border-t border-gray-200' />
                    </div>
                    <div className='relative flex justify-center'>
                      <span className='bg-white px-4 text-sm font-medium text-gray-500'>or</span>
                    </div>
                  </div>

                  <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
                    <div className='col-span-full'>
                      <label
                        htmlFor='email-address'
                        className='block text-sm font-medium text-gray-700'>
                        Email address
                      </label>
                      <div className='mt-1'>
                        <Field
                          as={Input}
                          type='email'
                          id='email'
                          name='email'
                          autoComplete='email'
                          className={`block w-full rounded-md border-gray-300 shadow-sm sm:text-sm ${
                            formik.errors.email && formik.touched.email
                              ? 'border-red-500 border-2'
                              : 'focus:border-indigo-500 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className='col-span-full'>
                      <label
                        htmlFor='name-on-card'
                        className='block text-sm font-medium text-gray-700'>
                        Name on card
                      </label>
                      <div className='mt-1'>
                        <Field
                          as={Input}
                          type='text'
                          id='name'
                          name='name'
                          autoComplete='cc-name'
                          className={`block w-full rounded-md border-gray-300 shadow-sm sm:text-sm ${
                            formik.errors.name && formik.touched.name
                              ? 'border-red-500 border-2'
                              : 'focus:border-indigo-500 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className='col-span-full'>
                      <label
                        htmlFor='card-number'
                        className='block text-sm font-medium text-gray-700'>
                        Card number
                      </label>
                      <div className='mt-1'>
                        <Field
                          as={Input}
                          type='text'
                          id='cardNumber'
                          name='cardNumber'
                          autoComplete='cc-number'
                          className={`block w-full rounded-md border-gray-300 shadow-sm sm:text-sm ${
                            formik.errors.cardNumber && formik.touched.cardNumber
                              ? 'border-red-500 border-2'
                              : 'focus:border-indigo-500 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className='col-span-8 sm:col-span-9'>
                      <label
                        htmlFor='expiration-date'
                        className='block text-sm font-medium text-gray-700'>
                        Expiration date (MM/YY)
                      </label>
                      <div className='mt-1'>
                        <Field
                          as={Input}
                          type='text'
                          name='expirationDate'
                          id='expirationDate'
                          autoComplete='cc-exp'
                          className={`block w-full rounded-md border-gray-300 shadow-sm sm:text-sm ${
                            formik.errors.expirationDate && formik.touched.expirationDate
                              ? 'border-red-500 border-2'
                              : 'focus:border-indigo-500 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className='col-span-4 sm:col-span-3'>
                      <label htmlFor='cvc' className='block text-sm font-medium text-gray-700'>
                        CVC
                      </label>
                      <div className='mt-1'>
                        <Field
                          as={Input}
                          type='text'
                          name='cvc'
                          id='cvc'
                          autoComplete='csc'
                          className={`block w-full rounded-md border-gray-300 shadow-sm sm:text-sm ${
                            formik.errors.cvc && formik.touched.cvc
                              ? 'border-red-500 border-2'
                              : 'focus:border-indigo-500 focus:ring-indigo-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className='p-4 pb-0 col-span-12'>
                      <div className='flex items-center justify-center space-x-2'>
                        <Button
                          variant='outline'
                          type='button'
                          className='h-16 w-16 shrink rounded-full p-0'
                          onClick={() => onClick(-10)}
                          disabled={newPrice <= data?.highestPrice!}>
                          <Minus className='h-8 w-8 text-neutral-600' />
                          <span className='sr-only'>Decrease</span>
                        </Button>
                        <div className='flex-1 text-center'>
                          <div className='text-7xl font-bold tracking-tighter'>{newPrice}</div>
                        </div>
                        <Button
                          type='button'
                          variant='outline'
                          size='sm'
                          className='h-16 w-16 shrink rounded-full p-0'
                          onClick={() => onClick(10)}>
                          <Plus className='h-8 w-8 text-neutral-600' />
                          <span className='sr-only'>Increase</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    Pay {newPrice}.00 $
                  </button>

                  <p className='mt-6 flex justify-center text-sm font-medium text-gray-500'>
                    <LockClosedIcon className='mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
                    Payment details are not passed to server
                  </p>
                </Form>
              </FormikProvider>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
}
