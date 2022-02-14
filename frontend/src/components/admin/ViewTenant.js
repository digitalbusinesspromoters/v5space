import React,{ useEffect, useState } from 'react'
import { db } from "./../../firebase";
import { collection, getDocs } from "firebase/firestore";
function ViewTenant() {
    const [docs, setDocs] = useState([]);
    
    useEffect(() => {
        getDocs(collection(db, "Tenant"))
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
            <h1>View Tenant</h1>
            <div className="viewTable">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>E-mail</th>
                    <th style={{minWidth:"300px"}}>Address</th>
                    <th>Flat No</th>
                    <th>Rent per month</th>
                    <th>Advanced Paid</th>
                    <th>Balance Rent</th>
                </tr>
                {docs.map((doc) =>
                {
                    return  <tr key={doc.pid}>
                        <td>{doc.tname}</td>
                        <td>{doc.tmobileno}</td>
                        <td>{doc.temail}</td>
                        <td>{doc.taddress}</td>
                        <td>{doc.tFlatNo}</td>
                        <td>{doc.trpm}</td> 
                        <td>{doc.tAdvancedPaid}</td> 
                        <td>{doc.tBalanceRent}</td> 
                       </tr>
                }
                )}
            </table>
            </div>
        </div>
    );
}

export default ViewTenant;
