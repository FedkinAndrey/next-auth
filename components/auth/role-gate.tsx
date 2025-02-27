'use client';

import { useCurrentRole } from '@/hooks/use-current-role';
import { UserRole } from '@prisma/client';
import React, { FC } from 'react';
import { FormError } from '../form-error';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate: FC<RoleGateProps> = ({ allowedRole, children }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have a permission to view this content!" />
    );
  }

  return <>{children}</>;
};
