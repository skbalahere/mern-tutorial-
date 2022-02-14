import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Link,useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Bookdetails(props) {
  const [book, setbook] = useState({}); 
  const {_id} = useParams();
  useEffect(function() { 
    async function getBook() {
      try {
        const response = await axios.get(`http://localhost:3001/api/book/${_id}`); 
        setbook(response.data);      
      } catch(error) {
        console.log('error', error);
      }
    }
    getBook();    
  }, [props]); 

  async function handleDelete() { 
    try {
   const response =  await axios.delete(`http://localhost:3001/api/delete/${_id}`); 
   
      toast(response.data.mgs);
     } catch(error) {
      toast.error(error);
    }
  }

  return ( 
    <div><div><Toaster/></div> 
      <h2>{book.title}</h2>
      <small>_id: {book._id}</small>
      <p>{book.description}</p>
      <div className="btn-group">
        <Link to={`/books/${book._id}/edit`} className="btn btn-primary">Edit</Link> 
        <button onClick={handleDelete} className="btn btn-danger">Delete</button> 
        <Link to="/books" className="btn btn-secondary">Close</Link>
      </div>
      <hr/>
    </div>
  );
};

export default Bookdetails;