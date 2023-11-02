import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Routers;
