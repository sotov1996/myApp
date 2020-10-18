import React, { Component } from 'react';

import AddCar from '../add-cars/add-car';

import './car-form.css';

export default class CarForm extends Component{

    state = {
        name: '',
        speed: '',
        active: false
    }

    onLabelChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onLabelChangeSpeed = (e) => {
        this.setState({
            speed: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.speed === ''){
            alert(`Please enter the Name or peed`)
        }else{
            this.props.onCarAdded(this.state.name, this.state.speed);
            this.setState({
                name:'',
                speed:''
            })
        }
    }

    onAddCar = () => {
        this.setState((state) => {
            return {
                active: !state.active
            }
        })
    }

    render() {
        let className = 'not_acive';
        if(this.state.active){
            className ='active'
        } 

        return (
            <div>
                <form className = {className}
                         onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" 
                               className="form-control"
                               placeholder='add Name'
                               onChange={this.onLabelChange}
                               value={this.state.name}></input>
                        <label>Speed</label>
                        <input type="number" 
                               className="form-control"
                               placeholder='add Speed'
                               onChange={this.onLabelChangeSpeed}
                               value={this.state.speed}></input>
                    </div>
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
                <AddCar onAddCar={() => this.onAddCar()}/>
            </div>
            )
    }
}
