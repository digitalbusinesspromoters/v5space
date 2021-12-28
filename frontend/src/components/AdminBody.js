import React from 'react'
import AddProperty from './admin/AddProperty'
import AddServiceProvider from './admin/AddServiceProvider'
import AssignTicket from './admin/AssignTicket'
import CreateTenant from './admin/CreateTenant'
import CreateTicket from './admin/CreateTicket'
import Dashboard from './admin/Dashboard'
import TypesOfServices from './admin/TypesOfServices'
import ViewClosedTickets from './admin/ViewClosedTickets'
import ViewOpenTickets from './admin/ViewOpenTickets'
import ViewProperty from './admin/ViewProperty'
import ViewServiceProvider from './admin/ViewServiceProvider'
import ViewTenants from './admin/ViewTenant'


function AdminBody({page}) {
    // const params = useLocation()
    // console.log(page)
    return (
      <div className='adminbody'>
        {page === "AddProperty" && <AddProperty />}
        {page === "AddServiceProvider" && <AddServiceProvider />}
        {page === "AssignTicket" && <AssignTicket />}
        {page === "CreateTenant" && <CreateTenant />}
        {page === "CreateTicket" && <CreateTicket />}
        {page === "Dashboard" && <Dashboard />}
        {page === "TypesOfServices" && <TypesOfServices />}
        {page === "ViewClosedTickets" && <ViewClosedTickets />}
        {page === "ViewOpenTickets" && <ViewOpenTickets />}
        {page === "ViewProperty" && <ViewProperty />}
        {page === "ViewServiceProvider" && <ViewServiceProvider />}
        {page === "ViewTenants" && <ViewTenants />}
      </div>
    )
}

export default AdminBody
