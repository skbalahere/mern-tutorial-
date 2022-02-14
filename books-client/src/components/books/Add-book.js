import React, { useState } from "react"; 
import { post } from 'axios'; 
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Addbook(props) {
  const initialState = { title: '', description: '' }
  const [book, setbook] = useState(initialState) 
  const navigate = useNavigate();
  function handleChange(event) { 
    setbook({...book, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) { 
    event.preventDefault();  
    if(!book.title || !book.description ) return 
    async function postbook() {
      try {
        const response = await post('http://localhost:3001/api/addbooks', book); 
        toast(response.data.msg);
             } catch(error) {
        console.log('error', error);
      }
    }
    postbook();
  }

  function handleCancel() {
    navigate('/books');
  }

  return ( 
    <div><div><Toaster/></div> 
      <h1>Create Book</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input name="title" type="text" value={book.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" rows="3" value={book.description} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
     
          
        </div>
      </form>
    </div>
  );
}

export default Addbook;