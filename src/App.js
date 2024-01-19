import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  let content;
  switch (currentPage) {
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
