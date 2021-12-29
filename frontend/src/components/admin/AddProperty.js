import React,{useState} from 'react'
import {db} from '../../firebase'
function AddProperty() {

  const [pid,setPid]=useState('')
  const [doa,setDoa]=useState('')
  const [pType,setPType]=useState('')
  const [pName,setPName]=useState('')
  const [projectName,setProjectName]=useState('')



  const handleSubmit= (e)=>{
    e.preventDefault(e)
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
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Property Type</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Project Name</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Flat No</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
        
         
          <li>
            <label htmlFor='ownerName'>Loacation</label>
            <input type='text' name='' id='ownerName' />
          </li>
          <li>
            <label htmlFor='ownerMobile'>Address</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Agrement Type</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Owner / Firm Name</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Owner /  Firm Contact No</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
        
         
          <li>
            <label htmlFor='ownerName'>Tenure in Months</label>
            <input type='text' name='' id='ownerName' />
          </li>
          <li>
            <label htmlFor='ownerMobile'>Occupancy Status</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>V5 Advancemet</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>V5  Rental cost</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Let-out Advancement</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
        
          
          <li>
            <label htmlFor='ownerName'>Let-out Gross Rental</label>
            <input type='text' name='' id='ownerName' />
          </li>
          <li>
            <label htmlFor='ownerMobile'>Maintenance</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>V5 Advancemet</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Total Let-out Rental</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Rent Receivable Date</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Attested Type</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Attested By</label>
            <input type='text' name='' id='ownerMobile' />
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
