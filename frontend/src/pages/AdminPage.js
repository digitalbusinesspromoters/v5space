import React from 'react'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Sidebar from '../components/Sidebar'
import './css/adminPage.css'
function AdminPage() {
    return (
        <div>
            {/* <Loader/>/ */}
            <Header/>
            <div className='page-body-wrapper null'>
            <Sidebar/>
            </div>
           <div className="page-body">
               <div className="container-fluid dashboard-default-sec">
                   Hello
               </div>
           </div>
        </div>
    )
}

export default AdminPage
