import React from 'react';
import { createContext, useContext } from 'react';
import { User } from '../../core/modules/auth/Auth.types';

// Definieer het type voor de context
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Maak de context aan
const UserContext = createContext<UserContextType | undefined>(undefined);

// Definieer een custom hook om gemakkelijk toegang te krijgen tot de context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext moet worden gebruikt binnen een UserProvider');
  }
  return context;
};

// Maak een provider component aan om de context aan de componentenboom door te geven
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);

  // Definieer de waarde van de context die aan de provider wordt doorgegeven
  const value: UserContextType = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
