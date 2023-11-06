import { useState } from 'react';
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import RegisterForm from './RegisterForm';
import RegisterFormComplete from './RegisterFormComplete';

function RegisterPage() {
  const [userData, setUserData] = useState({});
  const [next, setNext] = useState(false);

  return (
    <>
      <div className="register-page">
        <Header />
        <div className="container-main">
          <img src="src/assets/logo-blue.svg" alt="logo" />
          <div className="register-page-p">
            {!next && (
              <>
                <p>Don&apos;t have a registration yet?</p>
                <p>
                  So, before you look for your best friend, we need some
                  information:
                </p>
              </>
            )}
          </div>
          {next ? (
            <RegisterFormComplete userData={userData} />
          ) : (
            <RegisterForm setUserData={setUserData} setNext={setNext} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;
