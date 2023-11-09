/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const PetContext = createContext({});

export const PetProvider = ({ children }) => {
  const [pet, setPet] = useState({});

  return (
    <PetContext.Provider value={{ pet, setPet }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetContext;
