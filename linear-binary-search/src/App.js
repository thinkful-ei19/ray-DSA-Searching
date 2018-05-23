import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import data from './data';
import sortedData from './sorted-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search 
          data={data}
          sortedData={sortedData}  
        />
      </div>
    );
  }
}

export default App;
