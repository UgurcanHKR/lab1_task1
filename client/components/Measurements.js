// importing "react" and "react-table" modules
import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy } from "react-table";

function Measurements() {
    
    // To create a state with empty initial values
    const [data, setData] = useState([{unit_id: "",temperature: "",date: ""}]);

    // Runs after every render
    useEffect(()=>{
        fetchMeasurements()
        
        setInterval(fetchMeasurements, 5000);
    }, [])

    // This function fetches data based on this url -/api/measurements-
    // 2 additional attributes are added to newData and the state is set by this created data
    async function fetchMeasurements(){
        console.log("fetch")
        const response = await fetch("/api/measurements");
        const data = await response.json()
        const newData = data.map((measurement, index) => ({
            ...measurement,
            id: index+1,            
            date: new Date(measurement.unix_timestamp).toLocaleDateString(),
        }))       
        setData(newData)
    }
        
    // This "columns"(fields) created by useMemo function is one of the components in react-table
    // Also, useMemo can be used when a function uses a lot of memory when calling it
    const columns = useMemo(() => [{
        Header: 'Number',
        accessor: 'id'
    },{
        Header: 'Temperature',
        accessor: 'temperature'
    },{
        Header: 'Date',
        accessor: 'date'
    },],[]);    

    // Create a useTable object whose components are columns and data
    // To sort react-table, useSortBy is used additionally
    const tableInstance = useTable({
        columns,
        data
    },
        useSortBy)

    // the components of react-table object are defined in here    
    const {getTableProps, getTableBodyProps, 
        headerGroups, rows, prepareRow} = tableInstance;
    
    // This slice function returns a piece of data based on parameter values
    const sliceddata = data.slice(data.length-5, data.length);

    // This reduce function returns average value based on "sliceddata" 
    // It take a sum of all temperature values in 5 documents(rows), then by dividing 5, it returns the average value
    var avg = sliceddata.reduce((total, next) => total + next.temperature, 0) / sliceddata.length;

    // print this average to console
    console.log(avg)

    // The average value is multiplied by 100, and 
    // Then it the function returns to the value to be rounded to the nearest integer 
    // Lastly, toFixed function takes only 2 decimal digits 
    avg = (Math.round(avg * 100) / 100).toFixed(2)

    // Measurements.js function returns a react-table and a text 
    // There can not be two return in here. <> and </> are used 
    // at both 75th and 113th row indexes to return as a one.
    return (
        <>
        <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                            {column.isSorted
                                ? column.isSortedDesc
                                    ? ' 🔽'
                                    : ' 🔼'
                                : ''}
                            </span>
                        </th>
                    )) 
                }
                    
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell)=>{
                            return <td {...cell.getCellProps()}>
                            {cell.render('Cell')}</td> 
                        }) }
                    </tr>
                )
            })}
        </tbody>
    </table>
    <h1>Average Temperature: {avg} </h1>
        </>
    )
}

// Output of this file
export default Measurements;