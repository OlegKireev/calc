import React from 'react';
import { Layout } from './Layout/Layout';
import CalculatorContainer from './pages/Calculator/CalculatorContainer';

const App = () => {
  return (
    <>
      <Layout>
        <CalculatorContainer />
      </Layout>
    </>
  );
};

export default App;
