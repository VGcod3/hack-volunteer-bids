import { GoPersonFill } from 'react-icons/go';
import { LoginForm } from '../../components/LoginForm';

export default function Page() {
  return (
    <div className='flex flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <GoPersonFill className='h-12 w-auto mx-auto text-indigo-600' />
        <h2 className='mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-800'>
          Sign in to your account
        </h2>
      </div>

      <LoginForm />
    </div>
  );
}
