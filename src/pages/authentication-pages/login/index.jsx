import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import SignInForm from '../../../Components/SignInForm';

function LoginPage() {
  const iconsArr = [
    { src: 'src/assets/home.svg', alt: 'home icon' },
    { src: 'src/assets/messages.svg', alt: 'messages icon' },
  ];

  return (
    <>
      <div className="register-page">
        <Header iconsArr={iconsArr} />
        <div className="container-main">
          <img src="src/assets/logo-blue.svg" alt="logo" />
          <div className="register-page-p">
            <p>Already have an account? </p>
            <p>Sign in bellow!</p>
          </div>
          <SignInForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
