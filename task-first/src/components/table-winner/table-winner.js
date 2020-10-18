import React, {Component} from 'react';

export default class TableWinner extends Component{

render() {
    const {onCars, onRoad} = this.props;

    const onCarWin = onCars.map((user, index) => {
        const time = Number(onRoad/user.speed).toFixed(1);
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{time}</td>
                </tr>            
            ) 
    })
        return(
            <>
                {onCarWin}
            </>
            )
        }
    }
