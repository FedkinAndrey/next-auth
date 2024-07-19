import { logout } from '@/actions/logout';
import React, { FC } from 'react';

interface LogoutButtonProps {
  children: React.ReactNode;
}

export const LogoutButton: FC<LogoutButtonProps> = ({ children }) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
