import React from 'react';
import { Layout } from './Layout/index';
import { CalculatorContainer } from './pages/Calculator/index';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <CalculatorContainer />
      </Layout>
    </>
  );
};

export default App;
