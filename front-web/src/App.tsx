import React from 'react';
import './core/assets/styles/custom.scss';
import './app.scss';
import Header from './core/components/Header';
import Home from './core/components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
