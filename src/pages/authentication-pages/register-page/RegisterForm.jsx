/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const schema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be 8 or more characters long'),
  confirmPassword: z
    .string({ required_error: 'Confirm Password is required' })
    .min(8, 'Password must be 8 or more characters long'),
});

function RegisterForm({ setUserData, setNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setUserData(data);
      setNext(true);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register('email')} placeholder="Enter your email address" />

      {errors.email?.message && <p>{errors.email?.message}</p>}

      <label>Password</label>
      <input
        {...register('password')}
        placeholder="Enter your password"
        type="password"
        onChange={() => setPasswordError(false)}
      />

      {errors.password?.message && <p>{errors.password?.message}</p>}

      <label>Confirm password</label>
      <input
        {...register('confirmPassword')}
        placeholder="Confirm your password"
        type="password"
        onChange={() => setPasswordError(false)}
      />

      {errors.confirmPassword?.message && (
        <p>{errors.confirmPassword?.message}</p>
      )}
      {passwordError && <p>The passwords do not match</p>}

      <div className="button-container">
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default RegisterForm;
