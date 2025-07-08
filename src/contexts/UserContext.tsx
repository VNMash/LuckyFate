import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  balance: number;
  totalTickets: number;
  totalSpent: number;
  purchaseTicket: (price: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [balance, setBalance] = useState(25000); // Початковий баланс ₴25,000
  const [totalTickets, setTotalTickets] = useState(47);
  const [totalSpent, setTotalSpent] = useState(8750);

  const purchaseTicket = (price: number) => {
    if (balance >= price) {
      setBalance(prev => prev - price);
      setTotalTickets(prev => prev + 1);
      setTotalSpent(prev => prev + price);
    }
  };

  return (
    <UserContext.Provider value={{
      balance,
      totalTickets,
      totalSpent,
      purchaseTicket
    }}>
      {children}
    </UserContext.Provider>
  );
};