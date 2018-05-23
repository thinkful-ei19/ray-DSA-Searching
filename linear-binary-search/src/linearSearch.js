import React from 'react';

export default class LinearSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linearTries: null,
      binaryTries: null
    }
  }

  linearSearch(array, value) {
    let tries = 0;
    for (let i = 0; i < array.length; i++) {
      tries++;
      if(array[i] === value) {
        const result = `${value} was found in ${tries} tries.`;
        this.setState({
          linearTries: result
        });
        tries = 0;
        break;
      }
    }
    if(tries === array.length) {
      const result = 'Number not found';
      this.setState({
        linearTries: result
      });
    }
  }

  handleLinearSearch(value) {
    this.linearSearch(this.props.data, parseInt(value, 10));
    // this.refs.linearInput.value = '';
  }


  binarySearch(array, value, start = 0, end = array.length - 1, tries = 0) {
    tries++;
    if(start > end) {
      const result = 'Number not found';
      this.setState({
        binaryTries: result
      });
    }

    const index = Math.floor((start + end) / 2);
    if(Number(value) === array[index]) {
      const result = `${value} was found in ${tries} tries.`;
      this.setState({
        binaryTries: result
      })
      // return;
    }
    else if(value > array[index]) {
      tries++;
      return this.binarySearch(array, value, index + 1, end, tries);
    }
    else if(value < array[index]) {
      tries++;
      return this.binarySearch(array, value, start, index - 1, tries);
    }
  }

  handleBinarySearch(value) {
    this.binarySearch(this.props.sortedData, parseInt(value, 10)) 
  }

  render() {
    return (
      <div>
        <form onSubmit = {(event) => {
          event.preventDefault();
        }}>
          <label>Linear Search</label> <br/>
          <input type="text" name="linearSearch" ref="linearInput"></input> 
          <button type="submit" onClick={() => {
            this.handleLinearSearch(this.refs.linearInput.value);
            this.refs.linearInput.value = '';
          }}>Linear Search</button> <br/>
        </form>

        <form onSubmit = {(event) => {
          event.preventDefault();
        }}>
          <label>Binary Search</label> <br/>
          <input type="text" name="binarySearch" ref="binaryInput"></input>
          <button type="sumbit" onClick={() => {
            this.handleBinarySearch(this.refs.binaryInput.value);
            this.refs.binaryInput.value = '';
          }}>Binary Search</button>
          <div>
            <p>Linear Search: {this.state.linearTries}</p>
            <p>Binary Search: {this.state.binaryTries}</p>
          </div>
        </form>
      </div>
    );
  }
}