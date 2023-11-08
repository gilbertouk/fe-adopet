/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import axios from '../../../api/axios';

const schema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be 8 or more characters long'),
});

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/home';

  const { setAuth } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/login', data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (response.status === 200) {
        setIsError(false);
        const accessToken = response?.data?.accessToken;
        const email = data?.email;
        const password = data?.password;
        setAuth({ email, password, accessToken });

        navigate(from, { replace: true });
      } else {
        setIsError(true);
        console.log(response.response.data.message);
      }
    } catch (error) {
      console.log(error);
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
      />

      {errors.password?.message && <p>{errors.password?.message}</p>}

      <button className="forgotten-password">
        I&rsquo;ve forgotten my password
      </button>

      {isError && <p>invalid email/password</p>}

      <div className="button-container">
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default SignInForm;
