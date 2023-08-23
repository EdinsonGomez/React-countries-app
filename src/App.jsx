import { RouterProvider } from 'react-router-dom';
import router from 'src/router';
import Header from 'src/components/header/Header';
import 'src/styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
