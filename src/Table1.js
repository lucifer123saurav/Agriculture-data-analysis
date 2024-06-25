import React from 'react';
import { Table } from '@mantine/core';
import { processDataForTable1 } from './helpers';
import data from './data.json';
import './tables.css'; 

const Table1 = () => {
  const processedData = processDataForTable1(data);

  return (
    <Table className="custom-table"> 
      <thead>
        <tr>
          <th>Year</th>
          <th>Max Production Crop</th>
          <th>Min Production Crop</th>
        </tr>
      </thead>
      <tbody>
        {processedData.map((item, index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{item.maxCrop}</td>
            <td>{item.minCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Table1;
