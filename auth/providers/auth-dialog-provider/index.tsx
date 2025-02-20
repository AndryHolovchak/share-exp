'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthDialogConfig } from '@/auth/providers/auth-dialog-provider/types';
import useDisclosure from '@/hooks/use-disclosure';
import AuthDialog from '@/auth/providers/auth-dialog-provider/components/auth-dialog/auth-dialog';
import useDialog from '@/hooks/use-dialog';

interface AuthDialogContextType {
  showAuthDialog: (config?: AuthDialogConfig) => void;
}

const AuthDialogContext = createContext<AuthDialogContextType>({
  showAuthDialog: () => {},
});

export const AuthDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dialog = useDialog();
  const [config, setConfig] = useState<AuthDialogConfig>();

  const showAuthDialog = (config?: AuthDialogConfig) => {
    dialog.onOpen();
    setConfig(config);
  };

  return (
    <AuthDialogContext.Provider value={{ showAuthDialog }}>
      {children}
      <AuthDialog {...dialog} config={config} />
    </AuthDialogContext.Provider>
  );
};

export const useAuthModalContext = () => useContext(AuthDialogContext);
