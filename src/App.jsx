import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from './components/header/Header';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
