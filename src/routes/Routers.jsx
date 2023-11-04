import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/authentication-pages/initial';
import RegisterPage from '../pages/authentication-pages/register-page';
import LoginPage from '../pages/authentication-pages/login';
import HomePage from '../pages/protected-pages/home';
import RequireAuth from '../Components/RequireAuth';

function Routers() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<InitialPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* protect routes */}
      <Route element={<RequireAuth />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
