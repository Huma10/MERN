import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[form,setForm] = useState({amount:0,details:'',date:''})
  const[transactions,setTransaction] = useState([]);
  useEffect(()=>{
    fetchTransaction()
  },[])
  async function fetchTransaction(){
    const res = await fetch('http://localhost:7000/transaction');
    const {data} = await res.json();
    setTransaction(data);
    console.log(data);
  }
  async function handleSubmit(e){
    e.preventDefault();
    const res = await fetch('http://localhost:7000/transaction',{
      method:"POST",
      body:JSON.stringify(form),
      headers:{
        'content-type':'application/json'
      }
    })

    if(res.ok){
      fetchTransaction();
    }
   //// const data = await res.json();
    
    //console.log(data);
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

      <hr>
      </hr>
      <section>
          <table border='1'>
            <thead>
            <th>Amount</th>
            <th>Details</th>
            <th>Date</th>
            </thead>
            <tbody>
              {transactions.map((trx)=>(
                <tr key={trx._id}>
                <td>{trx.amount}</td>
                <td>{trx.details}</td>
                <td>{trx.date}</td>
              </tr>
              ))}
              
            </tbody>
          </table>

      </section>
    </div>
    
  );
}

export default App;
