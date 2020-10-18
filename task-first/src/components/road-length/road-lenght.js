import React, {Component} from 'react';
import TableWinner from '../table-winner/table-winner';

import './road-length.css';

export default class RoadLenght extends Component {

    state = {
        road: '',
        table: false
    }

    onRoadChange = (e) => {
        this.setState({
            road: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.road === ''){
            alert(`Please enter the road`)
        }else{
            this.setState({
                road: this.state.road,
                table: true
            })
        }
    }

    carWin(item) {
        const newArr =[...item];
    
        const func = newArr.sort((prev,next) => {
          return next.speed - prev.speed;
        })
          
        return func;
    }

    render() {
        const newCarsForWin = this.carWin(this.props.onCars);
        return (
        <div>
            <div className="input-group mb-3 d-flex">
                <input type="text" 
                       className="form-control" 
                       placeholder="Enter lenght" 
                       aria-label="Recipient's username" 
                       aria-describedby="button-addon2"
                       onChange={this.onRoadChange}
                       value={this.state.road}></input>
                <label className='label-for-road'>Road lenght, km</label>       
                <button className="btn btn-outline-secondary" 
                        type="submit" 
                        id="button-addon2"
                        onClick={this.onSubmit}>Start</button>
            </div>
            <h1 className="display-1">Winner result</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th >Place</th>
                        <th>Name</th>
                        <th>Time,s</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.table ? <TableWinner onCars={newCarsForWin} 
                                                 onRoad={this.state.road}/> : null}
                </tbody>
            </table>
        </div>
        )
    }
}
