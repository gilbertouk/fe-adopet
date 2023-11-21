import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../../hooks/useLogout';

const schema = z.object({
  name: z
    .string({ required_error: 'name field is required' })
    .min(6, 'name must be 6 or more characters long'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  message: z
    .string({ required_error: 'message field is required' })
    .min(8, 'message must be 10 or more characters long'),
  phone: z
    .string({
      required_error: 'phone field is required',
    })
    .min(8, 'phone must be 8 or more numbers long'),
});

const SupportPage = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { auth } = useAuth();

  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate('/');
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);

      resetField('name');
      resetField('phone');
      resetField('email');
      resetField('message');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-page-container ">
      {auth.email ? <Header signOut={signOut} /> : <Header />}
      <p className="home-page-container-title">
        Send a message to <br /> the support:
      </p>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input {...register('name')} placeholder="Enter your full name" />

          {errors.name?.message && <p>{errors.name?.message}</p>}

          <label>Phone</label>
          <input
            {...register('phone')}
            placeholder="Enter your phone number"
            type="number"
          />

          {errors.phone?.message && <p>{errors.phone?.message}</p>}

          <label>Email</label>
          <input
            {...register('email')}
            placeholder="Enter your email address"
          />

          {errors.email?.message && <p>{errors.email?.message}</p>}

          <label>Message</label>
          <textarea
            {...register('message')}
            placeholder="Write your message."
          />

          {errors.message?.message && <p>{errors.message?.message}</p>}

          <div className="button-container button-contact-container">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
