import React,{useEffect,useState} from "react"
import Header from "../components/Header"
import Loader from "../components/Loader"
import Sidebar from "../components/Sidebar"
import AdminBody from "../components/AdminBody"
import "./css/adminPage.css"
function AdminPage(props) {
  // console.log(props)
  const [showSidebar, setshowSidebar] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth>=990){
      setshowSidebar(true)
    }else{
      setshowSidebar(false)
    }
      };
      window.addEventListener("load", handleResize, false);
      window.addEventListener("resize", handleResize, false);
      return ()=>{
        window.removeEventListener("load")
        window.removeEventListener("resize")
      }
  }, [])
  return (
    <div>
      {/* <Loader/>/ */}
      <Header />
      {console.log(showSidebar)}
      <div
        className='toggle-sidebar'
        style={{
          zIndex: 100000000,
          position: "fixed",
          top: "2rem",
          left: "1rem",
        }}
        onClick={() => setshowSidebar((prev) => !prev)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
        >
          <line x1='18' y1='10' x2='6' y2='10'></line>
          <line x1='21' y1='6' x2='3' y2='6'></line>
          <line x1='18' y1='18' x2='6' y2='18'></line>
        </svg>
      </div>
      <div
        className='page-body-wrapper null'
        style={{ display: "flex", flexDirection: "row" }}
      >
        {showSidebar && <Sidebar show={setshowSidebar}/>}
        <div className='page-body' style={!showSidebar?{marginLeft:0}:{}}>
          <div
            className='container-fluid dashboard-default-sec'
            style={{ zIndex: 1000 }}
          >
            <AdminBody page={props.match.params.page}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
