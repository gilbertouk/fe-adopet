import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/authentication-pages/initial';
import RegisterPage from '../pages/authentication-pages/register-page';
import LoginPage from '../pages/authentication-pages/login';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Routers;
