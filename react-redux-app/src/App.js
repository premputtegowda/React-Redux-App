import React from 'react';
import JobList from './components/JobList'

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      <JobList />
      </div>
      
    </div>
  );
}

// https://jobs.github.com/positions.json?description=react
//https://jobs.github.com/positions.json?description=react&location=sunnyvale

export default App;
