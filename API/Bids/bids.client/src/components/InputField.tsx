import { ReactNode } from 'react';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

import { ErrorMessage, Field, FieldProps } from 'formik';

interface InputFieldProps {
  name: string;
  type?: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  children?: ReactNode;
  className?: string;
}

export default function InputField({
  name,
  type = 'text',
  label,
  children,
  placeholder,
  defaultValue,
  className,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='grid gap-2'>
      <label htmlFor={name} className={'mt-0 block text-sm font-medium text-neutral-700'}>
        {label}
      </label>
      <div className='relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          {children}
        </div>

        <Field name={name}>
          {({ field }: FieldProps) => (
            <Input
              {...field}
              id={name}
              type={type === 'password' && showPassword ? 'text' : type}
              placeholder={placeholder}
              defaultValue={defaultValue}
              className={[
                children && `pl-10`,
                `block w-full border-neutral-300 rounded-md shadow-sm sm:text-sm ${className}`,
              ].join(' ')}
            />
          )}
        </Field>

        {type === 'password' && (
          <Button
            type='button'
            variant={'ghost'}
            className='focus:ring-indigo-600 absolute rounded-l-none inset-y-0 right-0 pr-3 flex items-center cursor-pointer '
            onClick={toggleShowPassword}>
            {showPassword ? (
              <Eye strokeWidth={1.5} className='text-neutral-700  p-0.5' />
            ) : (
              <EyeOff strokeWidth={1.5} className='text-neutral-700 p-0.5' />
            )}
          </Button>
        )}
      </div>
      <ErrorMessage name={name} component='p' className='mb-t text-sm text-rose-600' />
    </div>
  );
}
