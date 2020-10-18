import React, {Component} from 'react';

import TableCars from '../table-cars/table-cars';
import RoadLenght from '../road-length/road-lenght';
import CarForm from '../car-form/car-form';

import './app.css';

export default class App extends Component {

  maxId = 3;

  state = {
    carsData: [
      {id: 1, name: 'BMW', speed: 120, edit: false},
      {id: 2, name: 'Ferrari', speed: 150, edit: false}
    ]
  };

  deleteCar = (id) => {
    this.setState(({carsData}) => {
      const idx = carsData.findIndex((el) => el.id === id);
      
      const newArray = [
        ...carsData.slice(0, idx),
        ...carsData.slice(idx + 1)
      ];

      return {
        carsData: newArray
      }
    })
  }

  editCar = (id) => {
    this.setState(({carsData}) => {
      const idx = carsData.findIndex((el) => el.id === id);
      const oldItem = carsData[idx];
      const newItem = {...oldItem, edit: !oldItem.edit};
      const newArr = [...carsData.slice(0, idx),
                      newItem,
                      ...carsData.slice(idx+1)]

      return {
        carsData: newArr
      }
    })
    /*this.setState({
      edit: !this.state.edit
    })*/
  }

  addCar = (text, other) => {
    const newCar = {
      id: this.maxId++,
      name: text,
      speed: other,
      edit: false
    };

    this.setState(({carsData}) => {
      const newArr = [
        ...carsData,
        newCar
      ];
      return {
        carsData: newArr
      }
    })
  }

  render () {

    return (
      <div className="container">
          <CarForm onCarAdded={this.addCar}/>
          <TableCars cars = {this.state.carsData}
                       onDeleted={this.deleteCar}
                       onEdit={this.editCar}/>             
          <RoadLenght onCars={this.state.carsData}/>
      </div>
      )
  }
}