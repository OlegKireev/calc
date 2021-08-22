import React from 'react';
import { Layout } from './Layout/Layout';
import Calculator from './pages/Calculator/CalculatorContainer';

const App = () => {
  return (
    <>
      <Layout>
        <Calculator />
      </Layout>
    </>
  );
};

export default App;
