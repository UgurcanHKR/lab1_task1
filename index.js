// Each module is installed via "npm install (module name)"
import ReactDOM from "react-dom";
import React, { Component, useMemo, useState, useEffect } from "react";
import Table from "./table";

const express = require("express");
const {MongoClient} = require('mongodb');
const app = express();
const port = 3000;



/* const onHeaderClick = () => {
    return {
      onClick: () => {
        // do something
      },
    };
}; */
class Index extends React.Component{
    render(){
        return <div className="">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead key>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>


    </div>
    }
}

function Index(){
    // sample data array looks like this
    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: "TV Show",
            // First group columns
            columns: [
              {
                Header: "Name",
                accessor: "show.name"
              },
              {
                Header: "Type",
                accessor: "show.type"
              }
            ]
          },
          {
            // Second group - Details
            Header: "Details",
            // Second group columns
            columns: [
              {
                Header: "Language",
                accessor: "show.language"
              },
              {
                Header: "Genre(s)",
                accessor: "show.genres"
              },
              {
                Header: "Runtime",
                accessor: "show.runtime"
              },
              {
                Header: "Status",
                accessor: "show.status"
              }
            ]
          }
        ],
        []
      );

      return (
        <div className="Index">
          <Table columns={columns} data={data} />
        </div>
      );
}

ReactDOM.render(
    <Index />, 
    document.getElementById("root"));



    export default Index;