import React,{useState} from 'react'
import {db} from '../../firebase'
import { collection, addDoc } from "firebase/firestore";

function AddServiceProvider() {
  const [spname,setspname]=useState('')
  const [spmobile,setspmobile]=useState('')
  const [spemail,setspemail]=useState('')
  const [spaddress,setspaddress]=useState('')
  const [sptos,setsptos]=useState('')

  const handleSubmit= async(e)=>{
    e.preventDefault(e)
    try {
      const docRef = await addDoc(collection(db, "ServiceProvider"), {
        spname,
        spmobile,
        spemail,
        spaddress,
        sptos,

      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

    return (
        <div>
            <h1 className='adminBodyh1'>Add Service Provider</h1>
            <form className='addPropertyForm '>
            <h2>Service Provider Details</h2>
            <ul>
            <li>
            <label htmlFor='Name'>Name</label>
            <input type='text' value={spname} onChange={e=>setspname(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='Mobile'>Mobile</label>
            <input type='text' value={spmobile} onChange={e=> setspmobile(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='Email'>Email</label>
            <input type='text' value={spemail} onChange={e=>setspemail(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='Email'>address</label>
            <input type='text' value={spaddress} onChange={e=>setspaddress(e.target.value)}/>
          </li>
          <li>
          <label htmlFor='Email'>Type of Service</label>
          <input type='text' value={sptos} onChange={e=>setsptos(e.target.value)}/>
          </li>
            </ul>
              <ul>
              <button onClick={(e)=>handleSubmit(e)}>Add Service Provider</button>
              </ul>
                </form>
              
        </div>
    )
}

export default AddServiceProvider
