import React, { useState } from 'react';

const TableWinner = ({onCars, onRoad}) => {
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
    
    
export default TableWinner;
