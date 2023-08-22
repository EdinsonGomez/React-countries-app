import { useNavigate } from 'react-router-dom';

const useToDetailsPage = () => {
  const navigate = useNavigate();

  const onRedirect = (country) => {
    const { ccn3 } = country;

    if (ccn3) {
      navigate(`/country/${ccn3}`);
    }
  };

  return { onRedirect };
};

export default useToDetailsPage;
