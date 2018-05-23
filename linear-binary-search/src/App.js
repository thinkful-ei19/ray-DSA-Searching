import React, { Component } from 'react';
import './App.css';
import LinearSearch from './linearSearch';
import data from './data';
import sortedData from './sorted-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LinearSearch 
          data={data}
          sortedData={sortedData}  
        />
      </div>
    );
  }
}

export default App;
