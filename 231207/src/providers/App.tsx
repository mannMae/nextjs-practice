import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/libraries/reduxToolkit';

import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ReduxProvider>
  );
};
