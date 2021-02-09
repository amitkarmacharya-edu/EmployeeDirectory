import React from "react";
import EmployeeCard from "../EmployeeCard";

function SearchResults(props) {
    return (
        <>
            {
                props.results.map(result => {
                    return (<EmployeeCard
                            firstname={result.name.first}
                            lastname={result.name.last}
                            phone={result.phone}
                            email={result.email}
                            image={result.picture.large}
                            age={result.registered.age}
                            housenumber={result.location.street.number} 
                            streetname={result.location.street.name}
                            city={result.location.city}
                            zipcode={result.location.postcode}
                            state={result.location.state}            
                        />);
                    })  
            }
        </>
     );
}

export default SearchResults;