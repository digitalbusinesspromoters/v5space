import React,{useState} from 'react'
import {db} from '../../firebase'
import { collection, addDoc } from "firebase/firestore";


function AddProperty() {

  const [pid,setPid]=useState('')
  const [doa,setdoa]=useState('')
  const [pType,setpType]=useState('')
  const [pName,setpName]=useState('')
  const [FlatNo,setFlatNo]=useState('')
 const [Location,setLocation]=useState('')
 const [Address,setAddress]=useState('')
 const [AgrementType,setAgrementType]=useState('')
 const [OwnerFirmName,setOwnerFirmName]=useState('')
 const [OwnerFirmcontact,setOwnerFirmcontact]=useState('')
 const [TenureinMonths,setTenureinMonths]=useState('')
 const [OccupancyStatus,setOccupancyStatus]=useState('')
 const [V5Advancemet,setV5Advancemet]=useState('')
 const [V5Rentalcost,setV5Rentalcost]=useState('')
 const [LetoutAdvancement,setLetoutAdvancement]=useState('')
 const [LetoutGrossRental,setLetoutGrossRental]=useState('')
 const [Maintenance,setMaintenance]=useState('')
 const [TotalLetoutRental,setTotalLetoutRental]=useState('')
 const [RentReceivableDate,setRentReceivableDate]=useState('')
 const [AttestedType,setAttestedType]=useState('')
 const [AttestedBy,setAttestedBy]=useState('')
 




  const handleSubmit= async(e)=>{
    e.preventDefault(e)
    try {
      const docRef = await addDoc(collection(db, "Properties"), {
       pid,
       doa,
       pType,
       pName,
       FlatNo,
       Location,
       Address,
       AgrementType,
       OwnerFirmName,
       OwnerFirmcontact,
       TenureinMonths,
       OccupancyStatus,
       V5Advancemet,
       V5Rentalcost,
       LetoutAdvancement,
       LetoutGrossRental,
       Maintenance,
       TotalLetoutRental,
       RentReceivableDate,
       AttestedType,
       AttestedBy,
      });
      alert("Document written with ID: ", docRef.id);
    } catch (e) {
      alert("Error adding document: ", e);
    }
  }



    return (
      <div>
        {/* {console.log(pid)} */}
        <h1 className='adminBodyh1'>Property Details</h1>

        <form className='addPropertyForm '>
       
          <ul>
          <li>
            <label htmlFor='ownerName'>Property ID</label>
            <input type='text' value={pid} onChange={e=>setPid(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='ownerMobile'>D.O.A</label>
            <input type='Date' value={doa} onChange={e=>setdoa(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='owneremail'>Property Type</label>
            <input type='text' value={pType} onChange={e=>setpType(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='owneremail'>Project Name</label>
            <input type='text'value={pName} onChange={e=>setpName(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='owneremail'>Flat No</label>
            <input type='text' value={FlatNo} onChange={e=>setFlatNo(e.target.value)} />
          </li>
        
         
          <li>
            <label htmlFor='ownerName'>Location</label>
            <input type='text' value={Location} onChange={e=>setLocation(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='ownerMobile'>Address</label>
            <textarea type='text' value={Address} onChange={e=>setAddress(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>Agrement Type</label>
            <input type='text' value={AgrementType} onChange={e=>setAgrementType(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>Owner / Firm Name</label>
            <input type='text' value={ OwnerFirmName} onChange={e=>setOwnerFirmName(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='owneremail'>Owner /  Firm Contact No</label>
            <input type='text' value={OwnerFirmcontact} onChange={e=>setOwnerFirmcontact(e.target.value)} />
          </li>
        
         
          <li>
            <label htmlFor='ownerName'>Tenure in Months</label>
            <input type='text' value={TenureinMonths} onChange={e=>setTenureinMonths(e.target.value)}/>
          </li>
          <li>
            <label htmlFor='ownerMobile'>Occupancy Status</label>
            <input type='text' value={OccupancyStatus} onChange={e=>setOccupancyStatus(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>V5 Advancement</label>
            <input type='text' value={V5Advancemet} onChange={e=>setV5Advancemet(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>V5  Rental cost</label>
            <input type='text' value={V5Rentalcost} onChange={e=>setV5Rentalcost(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>Let-out Advancement</label>
            <input type='text' value={LetoutAdvancement} onChange={e=>setLetoutAdvancement(e.target.value)} />
          </li>
        
          
          <li>
            <label htmlFor='ownerName'>Let-out Gross Rental</label>
            <input type='text' value={LetoutGrossRental} onChange={e=>setLetoutGrossRental(e.target.value)} />
          </li>
          <li>
            <label htmlFor='ownerMobile'>Maintenance</label>
            <input type='text' value={Maintenance} onChange={e=>setMaintenance(e.target.value)} />
          </li>
      
          <li>
            <label htmlFor='owneremail'>Total Let-out Rental</label>
            <input type='text'value={ TotalLetoutRental} onChange={e=>setTotalLetoutRental(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>Rent Receivable Date</label>
            <input type='date' value={ RentReceivableDate} onChange={e=>setRentReceivableDate(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>Attested Type</label>
            <input type='text' value={ AttestedType} onChange={e=>setAttestedType(e.target.value)} />
          </li>
          <li>
            <label htmlFor='owneremail'>Attested By</label>
            <input type='text' value={AttestedBy} onChange={e=>setAttestedBy(e.target.value)} />
          </li>
          </ul>
          <ul>
          <button onClick={(e)=>handleSubmit(e)}>Add Property</button>
          </ul>
         
        </form>
      </div>
    )
}

export default AddProperty
