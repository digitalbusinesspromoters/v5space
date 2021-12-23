import React from 'react'

function Header() {
    return (
        <div className="page-main-header" style={{zIndex:100000,height:"100vh"}}>
        <div className="main-header-right row m-0">
          <div className="main-header-left">
            <div className="logo-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo.png" alt=""/></a></div>
            <div className="dark-logo-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/dark-logo.png" alt=""/></a></div>
            <div className="toggle-sidebar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-center status_toggle middle" id="sidebar-toggle"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg></div>
          </div>
          <div className="left-menu-header col">
            <ul>
              <li>
                <form className="form-inline search-form"  style={{borderBottom:"1px solid lightgray",borderRadius:'3px'}}>
                  <div className="search-bg">
                    <input className="form-control-plaintext" placeholder="Search here....."/>
                  </div>
                </form><span className="d-sm-none mobile-search search-bg"><i className="fa fa-search"></i></span>
              </li>
            </ul>
          </div>
          <div className="nav-right col pull-right right-menu p-0">
            <ul className="nav-menus">
              <li><a className="text-dark" href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></a></li>
              <li className="onhover-dropdown">
                <div className="bookmark-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                <div className="bookmark-dropdown onhover-show-div">
                  <div className="form-group mb-0">
                    <div className="input-group">
                      <div className="input-group-prepend"><span className="input-group-text"></span></div>
                      <input className="form-control" type="text" placeholder="Search for bookmark..."/>
                    </div>
                  </div>
                  <ul className="m-t-5">
                    <li className="add-to-bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox bookmark-icon"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>Email<span className="pull-right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                    <li className="add-to-bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square bookmark-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>Chat<span className="pull-right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                    <li className="add-to-bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-command bookmark-icon"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>Feather Icon<span className="pull-right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                    <li className="add-to-bookmark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-airplay bookmark-icon"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>Widgets<span className="pull-right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                  </ul>
                </div>
              </li>
              <li className="onhover-dropdown">
                <div className="notification-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg><span className="dot-animated"></span></div>
                <ul className="notification-dropdown onhover-show-div">
                  <li>
                    <p className="f-w-700 mb-0">You have 3 Notifications<span className="pull-right badge badge-primary badge-pill">4</span></p>
                  </li>
                  <li className="noti-primary">
                    <div className="media"><span className="notification-bg bg-light-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></span>
                      <div className="media-body">
                        <p>Delivery processing </p><span>10 minutes ago</span>
                      </div>
                    </div>
                  </li>
                  <li className="noti-secondary">
                    <div className="media"><span className="notification-bg bg-light-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span>
                      <div className="media-body">
                        <p>Order Complete</p><span>1 hour ago</span>
                      </div>
                    </div>
                  </li>
                  <li className="noti-success">
                    <div className="media"><span className="notification-bg bg-light-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></span>
                      <div className="media-body">
                        <p>Tickets Generated</p><span>3 hour ago</span>
                      </div>
                    </div>
                  </li>
                  <li className="noti-danger">
                    <div className="media"><span className="notification-bg bg-light-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg></span>
                      <div className="media-body">
                        <p>Delivery Complete</p><span>6 hour ago</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="mode"><i className="fa fa-moon-o"></i></div>
              </li>
              <li className="onhover-dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <ul className="chat-dropdown onhover-show-div">
                  <li>
                    <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/4.jpg" alt=""/>
                      <div className="media-body"><span>Ain Chavez</span>
                        <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                      </div>
                      <p className="f-12">32 mins ago</p>
                    </div>
                  </li>
                  <li>
                    <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/1.jpg" alt=""/>
                      <div className="media-body"><span>Erica Hughes</span>
                        <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                      </div>
                      <p className="f-12">58 mins ago</p>
                    </div>
                  </li>
                  <li>
                    <div className="media"><img className="img-fluid rounded-circle me-3" src="../assets/images/user/2.jpg" alt=""/>
                      <div className="media-body"><span>Kori Thomas</span>
                        <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                      </div>
                      <p className="f-12">1 hr ago</p>
                    </div>
                  </li>
                  <li className="text-center"> <a className="f-w-700" href="/">See All     </a></li>
                </ul>
              </li>
              <li className="onhover-dropdown p-0">
                <button className="btn btn-primary-light" type="button"><a href="login_two.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>Log out</a></button>
              </li>
            </ul>
          </div>
          <div className="d-lg-none mobile-toggle pull-right w-auto"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
        </div>
      </div>
    )
}

export default Header
