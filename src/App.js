import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Container></Container>
    </div>
  );
}

export default App;
