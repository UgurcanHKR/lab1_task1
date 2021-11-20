import React, { useState, useMemo, useEffect } from "react";
import { useTable, useSortBy } from "react-table";

function Measurements() {
    
    const [data, setData] = useState([{unit_id: "",temperature: "",date: ""}]);

    useEffect(()=>{
        fetchMeasurements()
        //setTimeout(fetchMeasurements, 0);
        setInterval(fetchMeasurements, 5000);
    }, [])

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

    const tableInstance = useTable({
        columns,
        data
<<<<<<< HEAD
    }, 
=======
    },
>>>>>>> ea178beec9aeaef19dc1cae5ad442d6ca103887b
        useSortBy)
    const {getTableProps, getTableBodyProps, 
        headerGroups, rows, prepareRow} = tableInstance;
    
    const sliceddata = data.slice(data.length-5, data.length);
    var avg = sliceddata.reduce((total, next) => total + next.temperature, 0) / sliceddata.length;
    console.log(avg)
    avg = (Math.round(avg * 100) / 100).toFixed(2)

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

export default Measurements;