import React from 'react';
import './App.css';
import { MainContainer } from './components';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app" style={{ minHeight: '100vh', background: 'var(--background-color, #f8fafc)' }}>
      <MainContainer />
    </div>
  );
}

export default App;