import React from 'react'

function AddServiceProvider() {
    return (
        <div>
            <h1 className='adminBodyh1'>Add Service Provider</h1>
            <form className='addPropertyForm '></form>
            <h2>Service Provider Details</h2>
            <ul>
            <li>
            <label htmlFor='Name'>Name</label>
            <input type='text' name='' id='Name' />
          </li>
          <li>
            <label htmlFor='Mobile'>Mobile</label>
            <input type='text' name='' id='Mobile' />
          </li>
          <li>
            <label htmlFor='Email'>Email</label>
            <input type='text' name='' id='Email' />
          </li>
            </ul>
        </div>
    )
}

export default AddServiceProvider
