import React from 'react';
import { Wrapper } from './MainLayout.style';
import { Navigation } from '..';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};
