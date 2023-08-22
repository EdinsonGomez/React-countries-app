import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import '../../styles/header/header.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>

      <div className="dark-btn">
        <FontAwesomeIcon icon={faMoon} className="dark-btn__icon" />
        <span>Dark Mode</span>
      </div>
    </header>
  );
}
