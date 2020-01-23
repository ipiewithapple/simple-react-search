import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'


class App extends Component {

  state = {
    cars: this.props.cars,
    searchCars: []
  }

  componentWillMount() {
    this.setState({searchCars: this.state.cars});
}

  oninputChange = (e) => {
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

  render() {

    const divStyle = {
      textAlign: 'center',
      marginTop: '50px'
    }

    return (
      <div style={divStyle}>
        <input type="text" onChange={this.oninputChange}></input>
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
