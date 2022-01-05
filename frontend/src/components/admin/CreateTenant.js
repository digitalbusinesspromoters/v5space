import React,{useState} from 'react'
import {db} from '../../firebase'
import { collection, addDoc } from "firebase/firestore";


function CreateTenant() {
  const [tname,settname]=useState('')
  const [tmobileno,settmobileno]=useState('')
  const [temail,settemail]=useState('')
  const [taddress,settaddress]=useState('')
  const [tFlatNo,settFlatNo]=useState('')
 const  [trpm,settrpm]=useState('')
 const [tAdvancedPaid,settAdvancedPaid]=useState('')
 const [tBalanceRent,settBalanceRent]=useState('')

 
 const handleSubmit= async(e)=>{
  e.preventDefault(e)
  try {
    const docRef = await addDoc(collection(db, "Tenant"), {
      tname,
      tmobileno,
      temail,
      taddress,
      tFlatNo,
      trpm,
      tAdvancedPaid,
      tBalanceRent,
   
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  return (
        <div>
        
    <h1 className='adminBodyh1'>Create Tenant</h1>
        <form className='addPropertyForm '>
       
          <ul>
          <li>
            <label htmlFor='ownerName'>Name</label>
            <input type='text' value={tname} onChange={e=>settname(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='ownerMobile'>Mobile No</label>
            <input type='text' value={tmobileno} onChange={e=>settmobileno(e.target.value)}/>
          </li>
        
          <li>
            <label htmlFor='owneremail'>E-mail</label>
            <input type='text' value={ temail} onChange={e=>settemail(e.target.value)}/>
     
          </li>
          <li>
            <label htmlFor='owneremail'>Address</label>
            <input type='text' value={taddress} onChange={e=>settaddress(e.target.value)}/>
         
          </li>
          <li>
            <label htmlFor='owneremail'>Flat No</label>
            <input type='text' value={tFlatNo} onChange={e=>settFlatNo(e.target.value)}/>
          </li>
        
         
          <li>
            <label htmlFor='ownerName'>Rent per month</label>
            <input type='text' value={trpm} onChange={e=>settrpm(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='ownerMobile'>Advanced Paid </label>
            <input type='text' value={tAdvancedPaid} onChange={e=>settAdvancedPaid(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='ownerMobile'>Balance Rent </label>
            <input type='text' value={tBalanceRent} onChange={e=>settBalanceRent(e.target.value)}/>
          </li>
          </ul>
          <ul>
          <button onClick={(e)=>handleSubmit(e)}>Create Tenant</button>
          </ul>
          </form>
        </div>
    )
}

export default CreateTenant
