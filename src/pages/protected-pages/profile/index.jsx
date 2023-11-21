import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import useLogout from '../../../hooks/useLogout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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

const Profile = () => {
  const [newPicture, setNewPicture] = useState(false);
  const [user, setUser] = useState({});
  const logout = useLogout();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { auth, setAuth } = useAuth();

  const signOut = async () => {
    await logout();
    navigate('/');
  };

  const fetchUser = async () => {
    const res = await axiosPrivate.get(`/user/${auth.id}/address/`);
    setUser({ ...res.data.user });

    return res.data.user;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: async () => await fetchUser(),
  });

  const onSubmit = async (data) => {
    try {
      const changePhoto = watch(['url_photo']);
      data.url_photo = changePhoto[0];

      const res = await axiosPrivate.put(`/user/${user.id}`, {
        ...user,
        ...data,
      });

      setUser({ ...res.data.user });
      setNewPicture(false);
      setAuth({ ...auth, urlPhoto: user.url_photo });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPicture = (e) => {
    e.preventDefault();
    setNewPicture(true);
  };

  useEffect(() => {
    try {
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {}, [newPicture]);

  return (
    <>
      <div className="home-page-container contact-page-container">
        <Header signOut={signOut} urlPhoto={user.url_photo} />
        <h1 className="profile-page-title">
          This is the profile that will appear to the shelter that receives your
          message.
        </h1>

        <div className="profile-container">
          <h2>Profile</h2>
          <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
            <label>Picture</label>

            {newPicture && (
              <input
                {...register('url_photo')}
                placeholder="Enter the URL for the image"
              />
            )}

            {!newPicture && (
              <button
                onClick={handleEditPicture}
                className="button-edit-picture"
              >
                <img
                  className="picture-profile"
                  src={user.url_photo}
                  alt="profile picture"
                />
              </button>
            )}
            {!newPicture && (
              <p className="change-picture">Click on picture to edit</p>
            )}

            {errors.url_photo?.message && <p>{errors.url_photo?.message}</p>}

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

            <label>About you</label>
            <textarea
              {...register('about')}
              placeholder="Describe a little about yourself"
            />
            {errors.about?.message && <p>{errors.about?.message}</p>}

            <div className="button-container">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
