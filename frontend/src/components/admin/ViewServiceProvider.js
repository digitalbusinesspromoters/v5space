import React,{ useEffect, useState }  from 'react'
import { db } from "./../../firebase";
import { collection, getDocs } from "firebase/firestore";
function ViewServiceProvider() {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "ServiceProvider"))
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
            <h1>View Service Providers</h1>
            <div className="viewTable">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>E-mail</th>
                    <th style={{minWidth:"300px"}}>Address</th>
                    <th>Type of Service</th>
                </tr>
                {docs.map((doc) =>
                {
                    return  <tr key={doc.pid}>
                        <td>{doc.spname}</td>
                        <td>{doc.spmobile}</td>
                        <td>{doc.spemail}</td>
                        <td>{doc.spaddress}</td>
                        <td>{doc.sptos}</td>
                        </tr>
                 }
                )}
                  </table>
                 </div>
        </div>
    );
}

export default ViewServiceProvider;
