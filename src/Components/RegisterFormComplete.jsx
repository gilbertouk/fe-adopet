/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import { postUser } from '../api/axios';

const schema = z.object({
  name: z
    .string({ required_error: 'name field is required' })
    .min(6, 'name must be 6 or more characters long'),
  about: z
    .string({ required_error: 'about field is required' })
    .min(8, 'about must be 10 or more characters long'),
  phone: z
    .string({
      required_error: 'phone field is required',
    })
    .min(8, 'phone must be 8 or more numbers long'),
});

function RegisterFormComplete({ userData }) {
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
      const userToPost = { ...data, ...userData };
      const response = await postUser(userToPost);
      const accessToken = response?.data?.accessToken;
      const refreshToken = response?.data?.refreshToken;
      const email = userData?.email;
      const password = userData?.password;
      setAuth({ email, password, accessToken, refreshToken });
      console.log(response.data);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name')} placeholder="Enter your full name" />

      {errors.name?.message && <p>{errors.name?.message}</p>}

      <label>About you</label>
      <textarea
        {...register('about')}
        placeholder="Describe a little about yourself"
      />

      {errors.about?.message && <p>{errors.about?.message}</p>}

      <label>Phone</label>
      <input
        {...register('phone')}
        placeholder="Enter your phone number"
        type="number"
      />

      {errors.phone?.message && <p>{errors.phone?.message}</p>}

      <div className="button-container">
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

export default RegisterFormComplete;
