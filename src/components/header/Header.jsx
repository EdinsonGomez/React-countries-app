import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { changeTheme } from 'src/store/themeReducer';
import 'src/styles/header/header.scss';

export default function Header() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  const onClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(changeTheme(newTheme));
  };

  return (
    <header className="header">
      <h1 className="header__title">
        <a href="/">Where in the world?</a>
      </h1>

      <button type="button" className="dark-btn" onClick={onClick}>
        <FontAwesomeIcon icon={faMoon} className="dark-btn__icon" />
        <span>
          {theme === 'dark' ? 'Light ' : 'Dark '}
          Mode
        </span>
      </button>
    </header>
  );
}
