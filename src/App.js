import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';

function App() {
  return (
    <div className="App">
      <h1>Agriculture Analytics</h1>
      <div>
        <h2>Table 1: Yearly Crop Production</h2>
        <Table1 />
      </div>
      <div>
        <h2>Table 2: Crop Averages (1950-2020)</h2>
        <Table2 />
      </div>
    </div>
  );
}

export default App;
