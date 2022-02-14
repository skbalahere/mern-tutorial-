import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Bookslist from './components/books/Bookslist';
import Bookdetails from './components/books/Book-details';
import Addbook from './components/books/Add-book';
import Editbook from './components/books/Edit-book';



function App() {
  return (
    <div className="App">    
    
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}
function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact="true" className={({isActive}) => 'nav-link' + (isActive ?' active' : '')} to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact="true" className={({isActive}) => 'nav-link' + (isActive ?' active' : '')} to="/books">Books</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return(
    <Routes>
      <Route path="/books" element={<Bookslist />} />
      <Route path="/addbook" element={<Addbook />} />
      <Route path="/books/:_id" element={<Bookdetails />} />
      <Route path="/books/:_id/edit" element={<Editbook />} />
      </Routes>
  );
}

export default App;
