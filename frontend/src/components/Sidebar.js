import React,{useState} from 'react'

function Sidebar() {
    const [disp, setdisp] = useState(true)
    return (
       <header className='main-nav'>
        
           <nav className='admin-nav'>
             <div className='main-navbar'>
                 <div id='mainnav'>
                     <ul className='nav-menu'>
                     <li className="sidebar-main-title">
                        <div style={{borderBottom:'1px solid lightgray'}}>
                        <h6>General</h6>
                        </div>
                  </li>
                  <li className="dropdown">
                      <p className="menu-title" href="/" onClick={()=>setdisp(!disp)}> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><b>Dashboard</b><div className="according-menu"><i className="fa fa-angle-right"></i></div></p>
                    <ul className="menu-content" style={disp?{display:'block'}:{display:'none'}}>
                      <li><a href="index.html">Default</a></li>
                      <li><a href="dashboard-02.html">Ecommerce</a></li>
                    </ul>
                  </li>
                     </ul>
                 </div>
             </div>
             </nav>
        
       </header>
    )
}

export default Sidebar
