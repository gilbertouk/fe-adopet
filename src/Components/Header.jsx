/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Header({ signOut }) {
  const iconsArrLogout = [
    { src: 'src/assets/home.svg', alt: 'home icon', link: '/' },
    { src: 'src/assets/messages.svg', alt: 'messages icon', link: '/contact' },
  ];

  const iconsArrLogged = [
    { src: 'src/assets/home.svg', alt: 'home icon', link: '/home' },
    { src: 'src/assets/messages.svg', alt: 'messages icon', link: '/contact' },
  ];

  // signOut
  //   ? iconsArr.push({
  //       src: 'src/assets/logout.svg',
  //       alt: 'logout icon',
  //       link: '/',
  //     })
  //   : '';

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
        <li key={iconsArrLogged.length + 1}>
          <button onClick={signOut} className="button-logout">
            <img src="src/assets/logout.svg" alt="logout icon" />
          </button>
        </li>
      </ul>
    );
  }
}

export default Header;
