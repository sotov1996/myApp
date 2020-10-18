import React, { Component } from 'react';

import './table-cars.css';

export default class TableCars extends Component {
    state = {
        tdName: '',
        tdSpeed: ''
    }

    onChangeTdName = (e) => {
        this.setState({
            tdName: e.target.value
        })
    }
    onChangeTdSpeed = (e) => {
        this.setState({
            tdSpeed: e.target.value
        })
    }

    onChangeName (item){
        return item = this.state.tdName ? this.state.tdName : item;
    }
    onChangeSpeed (item){
        return item = this.state.tdSpeed ? this.state.tdSpeed : item;
    }

    render() {
        const { cars, onDeleted, onEdit } = this.props;
    
        const elements = cars.map((item,index) => {
            return (
                <tr key={item.id} className='my-class'>
                    <td>{index+1}</td>
                    {item.edit ? <td><input value={this.state.tdName} onChange={this.onChangeTdName}></input></td> : <td>{this.onChangeName(item.name)}</td>}
                    {item.edit ? <td><input value={this.state.tdSpeed} onChange={this.onChangeTdSpeed}></input></td> : <td>{this.onChangeSpeed(item.speed)}</td>}
                    <td>
                        <button type='button' 
                                className="btn btn-success"
                                onClick={() => onEdit(item.id)}>Edit</button>
                        <button type='button' 
                                className="btn btn-danger"
                                onClick={() => onDeleted(item.id)}>Del</button>
                    </td>
                </tr>
            )
        })
    
        return (
            <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Speed, km/s</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                      {elements}
                </tbody>
            </table>
      
        )
    }
}