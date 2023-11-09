import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import usePet from '../../../hooks/usePet';
import useAuth from '../../../hooks/useAuth';
import useLogout from '../../../hooks/useLogout';
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';

const schema = z.object({
  name: z
    .string({ required_error: 'name field is required' })
    .min(6, 'name must be 6 or more characters long'),
  petName: z
    .string({ required_error: 'petName field is required' })
    .min(2, 'petName must be 2 or more characters long'),
  message: z
    .string({ required_error: 'message field is required' })
    .min(8, 'message must be 10 or more characters long'),
  phone: z
    .string({
      required_error: 'phone field is required',
    })
    .min(8, 'phone must be 8 or more numbers long'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { pet, setPet } = usePet();
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
      setPet({});
      // navigate('/login', { state: { from: location }, replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   // const getPet = async () => {
  //   //   try {
  //   //     const response = await axiosPrivate.get(`/pet/${petId}`);
  //   //     setPet(response.data.pet);
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //     navigate('/login', { state: { from: location }, replace: true });
  //   //   }
  //   // };

  //   // getPet();

  //   if (!pet.id) {
  //     navigate('/home', { state: { from: location }, replace: true });
  //   }
  // }, [pet.id]);

  return (
    <div className="home-page-container">
      <Header signOut={signOut} />
      <p className="home-page-container-title">
        Send a message to <br /> the shelter caring for <br /> the animal:
      </p>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            {...register('name')}
            value={auth.name}
            placeholder="Enter your full name"
          />

          {errors.name?.message && <p>{errors.name?.message}</p>}

          <label>Phone</label>
          <input
            {...register('phone')}
            value={auth.phone}
            placeholder="Enter your phone number"
            type="number"
          />

          {errors.phone?.message && <p>{errors.phone?.message}</p>}

          <label>Pet name</label>
          <input
            {...register('petName')}
            value={pet.name}
            placeholder="Which animal are you interested in?"
          />

          {errors.petName?.message && <p>{errors.petName?.message}</p>}

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

export default Contact;
