import React from "react";
import Row from "../Row";
import "./style.css";

function SearchBar(props) {

    const style={ width: "100%", height: "auto",overflow: "hidden" };
    return(
        <form className="search" style={style}>
            <div className="form-group" >
                    <div className="col-md-10">
                        <label htmlFor="employee">Search by Employee Name:</label>
                        <input
                            onChange={props.onInputChange}
                            name="employee"          
                            type="text"
                            className="form-control"
                            placeholder="Type Employee Name to Search"
                            id="employee"
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="sortby">Sort by:</label>     
                        <select id="sortParams" onChange={props.sortBy} className="form-control">          
                        <option value="Last Name">Last Name</option>
                        <option value="First Name">First Name</option>
                        <option value="Years Working">Years Working</option>        
                        </select>     
                    </div>
            </div>  
        </form>
    );
}

export default SearchBar;