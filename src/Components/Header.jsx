/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Header({ signOut, urlPhoto }) {
  const { auth } = useAuth();

  const iconsArrLogout = [
    { src: '/home.svg', alt: 'home icon', link: '/' },
    { src: '/messages.svg', alt: 'messages icon', link: '/support' },
  ];

  const iconsArrLogged = [
    { src: '/home.svg', alt: 'home icon', link: '/home' },
    { src: '/messages.svg', alt: 'messages icon', link: '/support' },
  ];

  if (!signOut) {
    return (
      <ul className="icon-container">
        <li key={5}>
          <Link to={'/'}>
            <img
              className="logo-img-header"
              src={'/logo.svg'}
              alt={'adopet logo'}
            />
          </Link>
        </li>

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
      <ul>
        <div className="icon-container">
          <li key={5}>
            <Link to={'/home'}>
              <img
                className="logo-img-header"
                src={'/logo.svg'}
                alt={'adopet logo'}
              />
            </Link>
          </li>

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
              <img src="/logout.svg" alt="logout icon" />
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
        </div>
      </ul>
    );
  }
}

export default Header;
