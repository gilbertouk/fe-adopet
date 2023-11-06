/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Header() {
  const iconsArr = [
    { src: 'src/assets/home.svg', alt: 'home icon', link: '/' },
    { src: 'src/assets/messages.svg', alt: 'messages icon', link: '/contact' },
  ];

  return (
    <ul className="icon-container">
      {iconsArr.map((icon, index) => {
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

export default Header;
