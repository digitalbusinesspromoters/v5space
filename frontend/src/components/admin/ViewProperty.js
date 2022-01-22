import React, { useEffect, useState } from "react";
import { db } from "./../../firebase";
import { collection, getDocs } from "firebase/firestore";

function ViewProperty() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "Properties"))
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
      <h1>View Property</h1>
      <div className="viewTable">
      <table >
          <tr>
            <th>Property Id</th>
            <th>D.O.A</th>
            <th>Property Type</th>
            <th>Project Name</th>
            <th>Flat No</th>
            <th>Location</th>
            <th style={{minWidth:"300px"}}>Address</th>
            <th>Agrement Type</th>
            <th>Owner / Firm Name</th>
            <th>Owner / Firm Contact No</th>
            <th>Tenure in Months</th>
            <th>Occupancy Status</th>
            <th>V5 Advancement</th>
            <th>V5 Rental cost</th>
            <th>Let-out Advancement</th>
            <th>Let-out Gross Rental</th>
            <th>Maintenance</th>
            <th>Total Let-out Rental</th>
            <th>Rent Receivable Date</th>
            <th>Attested Type</th>
            <th>Attested By</th>
          </tr>
        {docs.map((doc) =>
        {
            return  <tr key={doc.pid}>
                        <td>{doc.pid}</td>
                        <td>{doc.doa}</td>
                        <td>{doc.pType}</td>
                        <td>{doc.pName}</td>
                        <td>{doc.FlatNo}</td>
                        <td>{doc.Location}</td>
                        <td style={{whiteSpace:"pre-wrap"}}>{doc.Address}</td>
                        <td>{doc.AgrementType}</td>
                        <td>{doc.OwnerFirmName}</td>
                        <td>{doc.OwnerFirmcontact}</td>
                        <td>{doc.TenureinMonths}</td>
                        <td>{doc.OccupancyStatus}</td>
                        <td>{doc.V5Advancemet}</td>
                        <td>{doc.V5Rentalcost}</td>
                        <td>{doc.LetoutAdvancement}</td>
                        <td>{doc.LetoutGrossRental}</td>
                        <td>{doc.Maintenance}</td>
                        <td>{doc.TotalLetoutRental}</td>
                        <td>{doc.RentReceivableDate}</td>
                        <td>{doc.AttestedType}</td>
                        <td>{doc.AttestedBy}</td>    
                    </tr> 
    }
             
        )}
      </table>
      </div>
    </div>
  );
}

export default ViewProperty;
