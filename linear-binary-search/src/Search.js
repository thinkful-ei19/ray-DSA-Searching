import React from 'react';

export default class Search extends React.Component {
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

        <div>
          <h4>Dewey Decimal Index</h4>
          <code>
              {
                `const library = [{ author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
                { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
                { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
                { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
                { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
                { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
                { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
                { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
                { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane's Fighting Ships' },
                { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }];`
              }
            </code>
          <p>With a libary using a Dewey Decimal Index like the one above, the process of searching the library would go as follows:</p>
          <ol>
            <li>In the library above, the DD index has a decimal and the number values after the decimal point have differen ranges.</li>
            <li>Because of this, we would need run two seperate searches for the front decimal value and the value after the decimal. We woud use Binary search as it requires less iterations.</li>
            <li>After running the first search for the front value, we would narrow down the library down to a smaller batch to find our book</li>
            <li>We then take the batch of matching books with the same front value and run another binary search for the value after the decimal until we find an exact DD index for our book</li>
          </ol>
        </div>
      </div>
    );
  }
}