import React,{useState} from 'react'
import {db} from '../../firebase'
import { collection, addDoc } from "firebase/firestore";

function RiseTicket() {
  const [tkname,settkname]=useState('')
  const [tkmobile,settkmobile]=useState('')
  const [tkemail,settkemail]=useState('')
  const [tkaddress,settkaddress]=useState('')
  const [tkflatno,settkflatno]=useState('')
  const [tkpropertyid,settkpropertyid]=useState('')
  const [tkservicetobeprovided,settkservicetobeprovided]=useState('')
  const [tkserviceprovidername,settkserviceprovidername]=useState('')
  const [tkserviceproviderid,settkserviceproviderid]=useState('')


  const handleSubmit= async(e)=>{
    e.preventDefault(e)
    try {
      const docRef = await addDoc(collection(db, "Tickets"), {
        tkname,
        tkmobile,
        tkemail,
        tkaddress,
        tkflatno,
        tkpropertyid,
        tkservicetobeprovided,
        tkserviceprovidername,
        tkserviceproviderid,


      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

    return (
        <div>
            <h1 className='adminBodyh1'> Rise Ticket</h1>
            <form className='addPropertyForm '>
          
            <ul>
            <li>
            <label htmlFor='Name'>Tenant Name</label>
            <input type='text' value={tkname} onChange={e=>settkname(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='Mobile'>Tenant Mobile No</label>
            <input type='text' value={ tkmobile} onChange={e=>settkmobile(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='Email'>Tenant Email</label>
            <input type='text' value={ tkemail} onChange={e=>settkemail(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='Email'>Tenant Address</label>
            <input type='text' value={tkaddress} onChange={e=>settkaddress(e.target.value)}/>
          </li>
          <li>
          <label htmlFor='Email'>Tenant Flat No</label>
          <input type='text' value={tkflatno} onChange={e=>settkflatno(e.target.value)}/>
          </li>
          <li>
          <label htmlFor='Email'>Property ID</label>
          <input type='text' value={tkpropertyid} onChange={e=>settkpropertyid(e.target.value)}/>
          </li>
          <li>
          <label htmlFor='Email'>Service to be provided</label>
          <input type='text' value={tkservicetobeprovided} onChange={e=>settkservicetobeprovided(e.target.value)}/>
          </li>
          <li>
          <label htmlFor='Email'>Service provider name</label>
          <input type='text' value={tkserviceprovidername} onChange={e=>settkserviceprovidername(e.target.value)}/>
          </li>
          
          <li>
          <label htmlFor='Email'>Service provider ID</label>
          <input type='text' value={tkserviceproviderid} onChange={e=>settkserviceproviderid(e.target.value)}/>
          </li>
            </ul>
              <ul>
              <button onClick={(e)=>handleSubmit(e)}>Create Ticket</button>
              </ul>
                </form>
              
        </div>
    )
}

export default RiseTicket
