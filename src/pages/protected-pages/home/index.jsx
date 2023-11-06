import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import { useEffect, useState } from 'react';
import { fetchAllPets } from '../../../api/axios';

function HomePage() {
  const [pets, setPets] = useState([]);

  async function fetchPets() {
    try {
      const res = await fetchAllPets();
      setPets(res.pets);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPets();
  }, []);

  function calculate_age(dob) {
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return (
    <div className="home-page-container">
      <Header />
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

                <p className="pet-card-texts-contact">
                  Do you want this pet? click here.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
