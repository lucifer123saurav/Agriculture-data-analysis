import React from 'react';
import { Table } from '@mantine/core';
import { processDataForTable2 } from './helpers';
import data from './data.json';
import './tables.css'; 

const Table2 = () => {
  const processedData = processDataForTable2(data);

  return (
    <Table className="custom-table"> 
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (1950-2020)</th>
          <th>Average Cultivation Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody>
        {processedData.map((crop, index) => (
          <tr key={index}>
            <td>{crop.crop}</td>
            <td>{crop.averageYield}</td>
            <td>{crop.averageArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Table2;
