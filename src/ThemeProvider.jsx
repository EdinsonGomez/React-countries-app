import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return children;
}
