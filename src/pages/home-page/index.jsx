import Button from '../../Components/Button';
import Footer from '../../Components/Footer';

function HomePage() {
  return (
    <>
      <div className="container">
        <div className="icon-container">
          <img src="src/assets/home.svg" alt="home icon" />
          <img src="src/assets/messages.svg" alt="messages icon" />
        </div>
        <div className="container-main">
          <img src="src/assets/logo.svg" alt="logo" />
          <h1>Welcome!</h1>
          <p>
            How about changing your life by adopting your new best friend? Come
            with us!
          </p>
          <div className="button-container">
            <Button text={'Sign in'} />
            <Button text={'Register now'} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
