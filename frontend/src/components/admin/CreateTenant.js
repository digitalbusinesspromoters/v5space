import React from 'react'

function CreateTenant() {
    return (
        <div>
        
    <h1 className='adminBodyh1'>Create Tenant</h1>
        <form className='addPropertyForm '>
       
          <ul>
          <li>
            <label htmlFor='ownerName'>Name</label>
            <input type='text' name='' id='ownerName' />
          </li>
          <li>
            <label htmlFor='ownerMobile'>Mobile No</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>E-mail</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Address</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='owneremail'>Flat No</label>
            <input type='text' name='' id='ownerMobile' />
          </li>
        
         
          <li>
            <label htmlFor='ownerName'>Rent per month</label>
            <input type='text' name='' id='ownerName' />
          </li>
          <li>
            <label htmlFor='ownerMobile'>Advanced Paid </label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          <li>
            <label htmlFor='ownerMobile'>Balance Rent </label>
            <input type='text' name='' id='ownerMobile' />
          </li>
          </ul>
          </form>
        </div>
    )
}

export default CreateTenant
