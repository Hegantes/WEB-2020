import React from 'react';
import './App.css';

import Number1 from './components/Number1';
import Number2 from './components/Number2';
import Soma from './components/Soma';
import Times from './components/Times';
import Bigger from './components/Bigger';

function App() {
  return (
    <div className="container">
      <div>Redux Calc</div>
      <div className="line">
        <Number1 />
        <Number2 />
        
      </div>
      <div className="line">
        <Soma />
        <Times />
        <Bigger />
      </div>
    </div>
  );
}

export default App;
