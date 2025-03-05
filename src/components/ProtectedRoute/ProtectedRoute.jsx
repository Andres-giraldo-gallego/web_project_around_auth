import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { getUserInfo } from '../../utils/auth';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');

  useEffect(() => {
    getUserInfo().then((response) => {
      console.log(response);
      if (response && response.token) {
        localStorage.setItem('token', response.token);

        if (!token && location.pathname !== '/signin') {
          localStorage.removeItem('token');
          return navigate('/signin');
        }
      } else {
        if (token && location.pathname === '/signin') {
          navigate('/');
        } else {
          return navigate('/signin');
        }
      }
    });
  }, [navigate, location]);

  if (!localStorage.getItem('token') && location.pathname !== '/signin') {
    return null;
  }

  return children;
}

export default ProtectedRoute;
