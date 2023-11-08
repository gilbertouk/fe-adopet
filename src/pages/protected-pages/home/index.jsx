import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';
import useLogout from '../../../hooks/useLogout';

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate('/');
  };

  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await axiosPrivate.get('/pets');
        setPets(response.data.pets);
      } catch (error) {
        console.error(error);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    getPets();
  }, []);

  const calculate_age = (dob) => {
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <div className="home-page-container">
      <Header signOut={signOut} />
      <p className="home-page-container-title">
        Hello! See the pets <br />
        available for adoption!
      </p>
      <div className="pets-container">
        {pets.map((pet) => {
          return (
            <div className="pet-card" key={pet.id}>
              <img src={pet.url_photo} alt="image of pet" />
              <div className="pet-card-texts">
                <h2>{pet.name}</h2>

                <p className="pet-card-texts-age">
                  {calculate_age(new Date(pet.age))} years
                </p>

                <p className="pet-card-texts-description">{pet.description}</p>

                <div className="contact-link">
                  <img
                    className="msg-icon"
                    src="src/assets/msgicon.svg"
                    alt="message icon"
                  />
                  <p className="pet-card-texts-contact">
                    Do you want this pet?
                    <br />
                    click here.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
