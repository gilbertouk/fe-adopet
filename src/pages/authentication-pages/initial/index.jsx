import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button';
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';

const InitialPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <>
      <main className="initial-page">
        <section className="container">
          <Header />
          <div className="container-main">
            <img src="src/assets/logo.svg" alt="logo" />
            <h1>Welcome!</h1>
            <p className="text-mobile">
              How about changing your life by adopting your new best friend?
              Come with us!
            </p>

            <p className="text-others">
              Adopting can change a life. <br /> How about looking for your new
              best friend today?
              <br />
              Come with us!
            </p>
            <div className="button-container">
              <Button text={'Sign in'} action={handleSignIn} />
              <Button text={'Register now'} action={handleRegister} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InitialPage;
