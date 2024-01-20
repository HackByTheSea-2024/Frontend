import React, { useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import HomePageP from './Pages/HomeP';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  let content;
  switch (currentPage) {
    case '/':
      content = <HomePageP/>;
      break;
    case 'login':
      content = <Login />;
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
