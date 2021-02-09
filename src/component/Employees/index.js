import React, { useEffect, useState } from "react";
import Row from "../Row";
import Col from "../Col";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import API from "../../utils/API";

function Employees() {

    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        API.getRandomEmployee()
            .then(res => {
                setResults(res.data.results);
                setFilteredResults(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onInputChange = event => {
        console.log(event.target.value);
        const employeesList = results.filter(emp => {
            return (emp.name.first.toLowerCase() + " " + emp.name.last.toLowerCase()).indexOf(event.target.value.toLowerCase()) > -1;
        });
        
        setFilteredResults(employeesList);
    };

    const sortBy = event => {
        let sortParam = event.target.value.toLowerCase();
        let sortedEmployeeList = [];
        console.log(sortParam);

        console.log(sortParam === "first name");

        if (sortParam === 'first name') {
            sortedEmployeeList = results.sort((a, b) => {
                return (a.name.first > b.name.first) ? 1 : -1;
            });
        } else if (sortParam === 'last name') {
            sortedEmployeeList = results.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
        } else if (sortParam === 'years working') {
            sortedEmployeeList = results.sort((a, b) => (a.registered.age > b.registered.age) ? 1 : -1);
        }
        
        setFilteredResults([...sortedEmployeeList]);
    };

    return (
        <>
            <Row>
                <Col>
                    <SearchBar onInputChange={onInputChange} sortBy={sortBy} />
                </Col>
            </Row>

            <Row>
                <Col>
                    <SearchResults results={filteredResults} />
                </Col>
            </Row>
        </>

    );
}

export default Employees;