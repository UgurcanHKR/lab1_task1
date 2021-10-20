// Each module is installed via "npm install (module name)"
//import ReactDOM from "react-dom";
//import React, { Component, useMemo, useState, useEffect } from "react";
//import Table from "./table";
const Component = require('react');  
const ReactTable = require("react-table");

/*const express = require("express");
 const {MongoClient} = require('mongodb');
const app = express();
const port = 3000; */

function Index() {
    const data = [{ name: 'Ayaan', age: 26 },
              { name: 'Ahana', age: 22 },
              { name: 'Peter', age: 40 },
              { name: 'Virat', age: 30 },
              { name: 'Rohit', age: 32 },
              { name: 'Dhoni', age: 37 }]  
    const columns = [{ Header: 'Name', accessor: 'name' },
                 { Header: 'Age',  accessor: 'age' }]
    return(
        <div> 
            <h1>New page</h1>
            <ReactTable  
                data={data}  
                columns={columns}  
                defaultPageSize = {2}  
                pageSizeOptions = {[2,4, 6]} 
            />  
        </div> 
    );
}

ReactDOM.render(
    <Index />, 
    document.getElementById("root"));



/* const onHeaderClick = () => {
    return {
      onClick: () => {
        // do something
      },
    };
}; */


/* ReactDOM.render(
    <Index />, 
    document.getElementById("root")); */



    