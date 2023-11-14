import { Routes, Route } from 'react-router-dom';
import InitialPage from '../pages/authentication-pages/initial';
import RegisterPage from '../pages/authentication-pages/register-page';
import LoginPage from '../pages/authentication-pages/login';
import HomePage from '../pages/protected-pages/home';
import RequireAuth from '../Components/RequireAuth';
import PersistLogin from '../Components/PersistLogin';
import Contact from '../pages/protected-pages/contact';
import Profile from '../pages/protected-pages/profile';
import SupportPage from '../pages/authentication-pages/support';

function Routers() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<InitialPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/support" element={<SupportPage />} />

      {/* protect routes */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routers;
