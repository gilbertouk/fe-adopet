/* eslint-disable react/prop-types */
function Header({ iconsArr }) {
  return (
    <ul className="icon-container">
      {iconsArr.map((icon, index) => {
        return (
          <li key={index}>
            <img src={icon.src} alt={icon.alt} />
          </li>
        );
      })}
    </ul>
  );
}

export default Header;
