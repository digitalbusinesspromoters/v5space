import React, { useState } from "react"
import { Link } from "react-router-dom"
function Sidebar() {
  const [disp, setdisp] = useState(0)
  const [ser, setser] = useState(0)
  const navs = [
    {
      navName: "Dashboard",
      navId: 0,
      navIcon: "fa fa-home",
      subNav: [],
      url:"Dashboard"
    },
    {
      navName: "Properties",
      navId: 1,
      navIcon: "fa fa-building",
      subNav: [
        {
          subName: "Add New Property",
          sId: 0,
          url: "AddProperty",
        },
        {
          subName: "View Properties",
          sId: 1,
          url: "ViewProperty",
        },
      ],
    },
    {
      navName: "Tenant",
      navId: 2,
      navIcon: "fa fa-users",
      subNav: [
        {
          subName: "Create Tenant",
          sId: 0,
          url: "CreateTenant",
        },
        {
          subName: "View all Tenant",
          sId: 1,
          url: "ViewTenants",
        },
      ],
    },
    {
      navName: "Tickets",
      navId: 3,
      navIcon: "fa fa-ticket",
      subNav: [
        {
          subName: "Assign Ticket",
          sId: 0,
          url: "AssignTicket",
        },
        {
          subName: "Create Ticket",
          sId: 1,
          url: "CreateTicket",
        },
        {
          subName: "View Open Tickets",
          sId: 2,
          url: "ViewOpenTickets",
        },
        {
          subName: "View Closed Tickets",
          sId: 3,
          url: "ViewClosedTickets",
        },
      ],
    },
  ]
  const services = [
    {
      navName: "Types of Services",
      navId: 0,
      navIcon: "fa fa-cogs",
      subNav: [],
      url:"TypesOfServices"
    },
    {
      navName: "Service Providers",
      navId: 1,
      navIcon: "fa fa-user-md",
      subNav: [
        {
          subName: "Add new Provider",
          sId: 0,
          url: "AddServiceProvider",
        },
        {
          subName: "View all Providers",
          sId: 1,
          url: "ViewServiceProvider",
        },
      ],
    },
  ]

  return (
    <header className='main-nav'>
      <nav className='admin-nav'>
        <div className='main-navbar'>
          <div id='mainnav' style={{ background: "#fff", minHeight: "100vh" }}>
            <ul className='nav-menu'>
              <li className='sidebar-main-title'>
                <div style={{ borderBottom: "1px solid lightgray" }}>
                  <h6>CRM Panel</h6>
                </div>
              </li>
              {navs.map((nav) => {
                return (
                  <Link to={nav.url}>
                    <li className='dropdown'>
                      <p
                        className='menu-title'
                        onClick={() =>{
                          setdisp(disp !== nav.navId ? nav.navId : null)
                          setser(null)
                        }
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          class={nav.navIcon}
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        >
                          {" "}
                        </i>
                        <b>{nav.navName}</b>
                        {nav.navId !== 0 && (
                          <div className='according-menu'>
                            <i className='fa fa-angle-right'></i>
                          </div>
                        )}
                      </p>
                      {disp === nav.navId && (
                        <ul
                          className='menu-content'
                          style={{ display: "block" }}
                        >
                          {nav.subNav.map((sn) => {
                            return (
                              <Link to={sn.url}>
                                <li>
                                  <p style={{ cursor: "pointer" }}>
                                    {sn.subName}
                                  </p>
                                </li>
                              </Link>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  </Link>
                )
              })}
              <li className='sidebar-main-title'>
                <div style={{ borderBottom: "1px solid lightgray" }}>
                  <h6>Services</h6>
                </div>
              </li>
              {services.map((nav) => {
                return (
                  <Link to={nav.url}>

                  <li className='dropdown'>
                    <p
                      className='menu-title'
                      onClick={() =>{
                        setser(ser !== nav.navId ? nav.navId : null)
                        setdisp(null)
                      }
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        class={nav.navIcon}
                        style={{ fontSize: "20px", marginRight: "10px" }}
                      >
                        {" "}
                      </i>
                      <b>{nav.navName}</b>
                      {nav.navId !== 0 && (
                        <div className='according-menu'>
                          <i className='fa fa-angle-right'></i>
                        </div>
                      )}
                    </p>
                    {ser === nav.navId && (
                      <ul className='menu-content' style={{ display: "block" }}>
                        {nav.subNav.map((sn) => {
                          return (
                            <Link to={sn.url}>
                            <li>
                              <p style={{ cursor: "pointer" }}>{sn.subName}</p>
                            </li>
                            </Link>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Sidebar
