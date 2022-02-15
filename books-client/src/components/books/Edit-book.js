import React, { useState, useEffect } from "react";
import { get, patch } from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Editbook(props) {
    
  const navigate = useNavigate();
  const initialState = { title: '', description: '' }
  const [book, setbook] = useState(initialState)
  const {_id} = useParams(); 
  useEffect(function() {
    async function getbook() {
      try {
        const response = await get(`http://localhost:3001/api/book/${_id}`);
        setbook(response.data);        
      } catch(error) {
        console.log(error);
      }
    }
    getbook();    
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();
    async function updateBook() {
      try {
              
        const response = await patch(`http://localhost:3001/api/editbook/${book._id}`, book);
        toast(response.data.msg);
        } catch(error) {
        console.log(error);
      }
    }
    updateBook();
  }

  function handleChange(event) {
    setbook({...book, [event.target.name]: event.target.value})
  }

  function handleCancel() {
    navigate('/books');
  }

  return (
    <div><div><Toaster/></div> 
      <h1>Edit {book.title}</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" rows="5" value={book.description} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Editbook;