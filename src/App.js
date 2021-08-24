import React from 'react';
import './App.css';
import { Converter } from './Converter';
import { GetData } from './getData'

const App = () => {
  const { error, isLoading } = GetData();

  if (isLoading) {
    return <div>is loading</div>;
  }

  if (error) {
    return <div>Sorry but something wrong happened</div>;
  }

  return (
    <Converter />
  );
}
export default App;
