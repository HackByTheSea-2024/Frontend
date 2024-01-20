import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import HomePageP from './pages/HomeP';
import PatientPage from './pages/PatientPage';

function App() {
  

  let content;
  switch (window.location.pathname) {
    case '/':
      content = <HomePageP/>;
      break;
    case '/patient':
      content = <PatientPage />;
      break;
    // Add more cases for other pages
    default:
      content = <div>Page not found</div>;
  }

  return (
    <div className="App">
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
