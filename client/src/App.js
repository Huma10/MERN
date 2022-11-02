import React, { useState } from 'react';
import './App.css';

function App() {

  const[form,setForm] = useState({amount:0,details:'',date:''})

  async function handleSubmit(e){
    e.preventDefault();
    const res = await fetch('http://localhost:7000/transaction',{
      method:"POST",
      body:form
    })
    console.log(res);
  }
  const handleChange = (e) =>{
   // console.log(e.target.value);
   setForm({...form,[e.target.name]:e.target.value});
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>

        <input type="number" value={form.amount} placeholder="Enter Transaction Amount" onChange={handleChange} name="amount"></input>
        <input type="text" value={form.details} placeholder="Enter Transaction Details" onChange={handleChange} name="details"></input>
        <input type="date" value={form.date}  placeholder="Enter Transaction Date" onChange={handleChange} name="date"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
