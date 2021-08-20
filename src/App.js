import React from 'react';
import { Layout } from './Layout/index';
import { Calculator } from './pages/Calculator/index';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Calculator />
      </Layout>
    </>
  );
};

export default App;
