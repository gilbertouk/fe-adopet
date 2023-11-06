import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button';
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';

function InitialPage() {
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    navigate('/register');
  }

  function handleSignIn(e) {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="container-main">
          <img src="src/assets/logo.svg" alt="logo" />
          <h1>Welcome!</h1>
          <p>
            How about changing your life by adopting your new best friend? Come
            with us!
          </p>
          <div className="button-container">
            <Button text={'Sign in'} action={handleSignIn} />
            <Button text={'Register now'} action={handleRegister} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InitialPage;
