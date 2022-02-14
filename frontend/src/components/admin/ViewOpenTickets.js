import React,{ useEffect, useState } from 'react'
import { db } from "./../../firebase";
import { collection, getDocs } from "firebase/firestore";
function ViewOpenTickets() {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "Tickets"))
          .then((querySnapshot) =>{
              let temp=[]
            querySnapshot.forEach((doc) => {
                temp.push(doc.data())
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        })
        setDocs(temp)
    })
          .catch((e) => {
            alert(e);
          });
    
      }, []);
    return (
        <div>
            <h1>Open Tickets</h1>
            <div className="viewTable">
            <table>
                <tr>
                    <th>Tenant Name</th>
                    <th>Tenant Mobile No</th>
                    <th>Tenant Email</th>
                    <th style={{minWidth:"300px"}}>Tenant Address</th>
                    <th>Tenant Flat No</th>
                    <th>Property ID</th>
                    <th>Service to be provided</th>
                    <th>Service provider name</th>
                    <th>Service provider ID</th>
                </tr>
                {docs.map((doc) =>
                {
                    return  <tr key={doc.pid}>
                        <td>{doc.tkname}</td>
                        <td>{doc.tkmobile}</td>
                        <td>{doc.tkemail}</td>
                        <td>{doc.tkaddress}</td>
                        <td>{doc.tkflatno}</td>
                        <td>{doc.tkpropertyid}</td> 
                        <td>{doc.tkservicetobeprovided}</td> 
                        <td>{doc.tkserviceprovidername}</td> 
                        <td>{doc.tkserviceproviderid}</td> 
                       </tr>
                }
                )}
                </table>
        </div>
        </div>
    );
}

export default ViewOpenTickets;
