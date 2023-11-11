/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Header({ signOut, urlPhoto }) {
  const { auth } = useAuth();

  const iconsArrLogout = [
    { src: 'src/assets/home.svg', alt: 'home icon', link: '/' },
    { src: 'src/assets/messages.svg', alt: 'messages icon', link: '/support' },
  ];

  const iconsArrLogged = [
    { src: 'src/assets/home.svg', alt: 'home icon', link: '/home' },
    { src: 'src/assets/messages.svg', alt: 'messages icon', link: '/support' },
  ];

  if (!signOut) {
    return (
      <ul className="icon-container">
        {iconsArrLogout.map((icon, index) => {
          return (
            <li key={index}>
              <Link to={icon.link}>
                <img src={icon.src} alt={icon.alt} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  if (signOut) {
    return (
      <ul className="icon-container">
        {iconsArrLogged.map((icon, index) => {
          return (
            <li key={index}>
              <Link to={icon.link}>
                <img src={icon.src} alt={icon.alt} />
              </Link>
            </li>
          );
        })}
        <li key={3}>
          <button onClick={signOut} className="button-logout">
            <img src="src/assets/logout.svg" alt="logout icon" />
          </button>
        </li>

        <li key={4}>
          <Link to={'/profile'}>
            <img
              className="header-image-profile"
              src={urlPhoto ? urlPhoto : auth.urlPhoto}
              alt="profile image"
            />
          </Link>
        </li>
      </ul>
    );
  }
}

export default Header;
