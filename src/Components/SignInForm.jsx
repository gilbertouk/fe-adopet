/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { login } from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

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

  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      const accessToken = response?.data?.accessToken;
      const refreshToken = response?.data?.refreshToken;
      const email = data?.email;
      const password = data?.password;
      setAuth({ email, password, accessToken, refreshToken });
      console.log(response.data);

      navigate('/');
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

      <div className="button-container">
        <button type="submit">Next</button>
      </div>
    </form>
  );
}

export default SignInForm;
