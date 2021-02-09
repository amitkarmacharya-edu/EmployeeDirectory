import React, { Component, useEffect, useState } from "react";
import Row from "./component/Row";
import Col from "./component/Col";
import SearchBar from "./component/SearchBar";
import SearchResults from "./component/SearchResults";
import Alerts from "./component/Alerts";
import API from "../../utils/API";

function Employees() {

    const [search, setSearch] = useState("");
    const [sort, setSortBy] = useState("");
    const [results, setResults] = useState([]);
    const [filteredResults, setfilteredResults] = useState([]);

    useEffect(() => {
        setAlert({ type: loading, msg: "Loading...." });
        API.getRandomEmployee()
            .then(res => {
                setResults(res.data.results);
            })
            .catch(err => {
                setAlert({ type: "err", msg: err })
            });
    }, []);

    const onInputChange = event => {
        const employeesList = results.filter(res => {
            return res.name.first.toLowerCase() + " " + res.name.last.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });
        setFilteredResults(employeesList);
    };

    const sortBy = event => {
        set

        const sortParam = event.target.value.toLowerCase();
        const sortedEmployeeList = [];

        if (sortParam === 'first name') {
            sortedEmployeeList = results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
        }

        if (sortParam === 'last name') {
            sortedEmployeeList = results.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
        }

        if (sortParam === 'years working') {
            sortedEmployeeList = results.sort((a, b) => (a.registered.age > b.registered.age) ? 1 : -1);
        }

        setFilteredResults(sortedEmployeeList);
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
                    <SearchResults eList={filteredResults} />
                </Col>
            </Row>
        </>

    );
}

export default Employees;