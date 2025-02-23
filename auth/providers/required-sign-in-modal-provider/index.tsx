'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RequiredSignInModalConfig } from '@/auth/providers/required-sign-in-modal-provider/types';
import useDisclosure from '@/hooks/use-disclosure';
import RequiredSignInModal from '@/auth/providers/required-sign-in-modal-provider/components/required-sign-in-modal/required-sign-in-modal';
import useDialog from '@/hooks/use-dialog';

interface RequiredSignInModalContextType {
  showSignInModal: (config?: RequiredSignInModalConfig) => void;
}

const RequiredSignInModalContext =
  createContext<RequiredSignInModalContextType>({
    showSignInModal: () => {},
  });

export const RequiredSignInModalProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const dialog = useDialog();
  const [config, setConfig] = useState<RequiredSignInModalConfig>();

  const showSignInModal = (config?: RequiredSignInModalConfig) => {
    dialog.onOpen();
    setConfig(config);
  };

  return (
    <RequiredSignInModalContext.Provider value={{ showSignInModal }}>
      {children}
      <RequiredSignInModal {...dialog} config={config} />
    </RequiredSignInModalContext.Provider>
  );
};

export const useRequiredSignInModalContext = () =>
  useContext(RequiredSignInModalContext);
