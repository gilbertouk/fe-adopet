import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

function RegisterPage() {
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
            <p>Don&apos;t have a registration yet?</p>
            <p>
              So, before you look for your best friend, we need some
              information:
            </p>
          </div>
          <div className="button-container">
            <Button text={'Register'} action={''} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;
