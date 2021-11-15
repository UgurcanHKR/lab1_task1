import React, { useState, useMemo } from "react";
import { useTable } from "react-table";
import { connectToDatabase } from './database.js';


function Measurements() {
    
    const [data, setData] = useState();

    async function fetchMeasurements() {
        const response = await fetch("/api/measurements");
        const json = await response.json();
        setData(json);
    }

    const data = useMemo(() => connectToDatabase, []);

    const columns = useMemo(() => [{
        Header: 'Id',
        accessor: 'unit_id'
    },{
        Header: 'Temperature',
        accessor: 'temperature'
    },{
        Header: 'Id',
        accessor: 'Unix_timestamp'
    }]);

    const tableInstance = useTable({
        columns,
        data,
    })
    const {getTableProps, getTableBodyProps, 
        headerGroups, rows, prepareRow} = tableInstance;
    return (
        <>
        <table {...getTableProps()}>
        <head>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>
                        {column.render('Header')}</th>
                    )) 
                }
                    
                </tr>
            ))}
        </head>
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
        </>
    )
}

export default Measurements;