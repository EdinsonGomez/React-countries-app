import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export default function DarkBtn() {
  return (
    <div className="dark-btn">
      <FontAwesomeIcon icon={faMoon} />
      <span>Dark Mode</span>
    </div>
  );
}
