import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';
import { PetProvider } from './context/PetProvider.jsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App.jsx';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PetProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </PetProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
