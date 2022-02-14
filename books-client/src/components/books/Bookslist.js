import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';

function Bookslist() {
  const [books, setBooks] = useState([])

  useEffect(function() {
    async function getBooks() {
      try {
        const response = await axios.get("http://localhost:3001/api/books");
        console.log(response.data);
        setBooks(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }        
    getBooks();
  }, []);

  return (
        <div >
 <div >
    <div > <h3> Books List </h3></div>
    <div ><Link to="/addbook" className="btn btn-primary">Create Book</Link> </div>
</div>

<div >
      {books.map((book) => {
        return(
          <div key={book._id}>
            <h4><Link to={`/books/${book._id}`}>{book.title}</Link></h4>
          <div> {book.description} </div>
            <hr/>
          </div>
        )     
      })}
      </div>
    </div>
  )
}

export default Bookslist;