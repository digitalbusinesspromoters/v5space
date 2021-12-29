import React from 'react'

function CreateTenant() {
    return (
        <div>
            <h1>Create Tenant</h1>
            <h1 className='adminBodyh1'>Property Details</h1>
        <form className='addPropertyForm '>
       
          <ul>
          <li>
            <label htmlFor='ownerName'>Property ID</label>
            <input type='text' name='' id='ownerName' />
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
          </ul>
          </form>
        </div>
    )
}

export default CreateTenant
