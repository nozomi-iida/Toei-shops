import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { Inner, StyledPage, theme } from './styles/PageStyles';

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
