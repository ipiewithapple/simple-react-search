import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'


class App extends Component {

  state = {
    cars: this.props.cars,
    searchCars: []
  }

  onInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    let searchCars = this.state.cars;
    searchCars = searchCars.filter((car) => {
      const searchValue = car.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    
    this.setState({
      searchCars: searchCars
    })

  }

  componentWillMount() {
    this.setState({
      searchCars: this.state.cars
    })
  }

  render() {

    const divStyle = {
      textAlign: 'center',
      marginTop: '50px'
    }

    return (
      <div style={divStyle}>
        <input type="text" onChange={this.onInputChange}></input>
        {this.state.searchCars.map((car, i) => {
          return (
            <Car name={car.name} year={car.year} key={i} />
          )
        })}

      </div>
    );
  }
}

export default App;
