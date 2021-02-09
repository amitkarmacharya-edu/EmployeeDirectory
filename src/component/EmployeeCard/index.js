import React from "react";

function EmployeeCard(props) {
   
  return (
    <div className="card mt-3 shadow">
      <div className="card-header"><h3>{props.firstname} {props.lastname}</h3></div>
      <div className="card-body d-flex justify-content-between">
          <div>
            <span><h5>Email: </h5>{props.email}</span>            
            <span><h5>Phone: </h5>{props.phone}</span>   
          </div>

          <div> 
            <span><h5>Address: </h5> {props.housenumber} {props.streetname}, {props.city}, {props.state} {props.zipcode}</span> 
            <span><h5>Years Working: </h5>{props.age}</span>
          </div>
        
          <img alt="avatar" src={props.image} className="img-fluid rounded" /> 
      </div>      
    </div>
  );
}

export default EmployeeCard;
