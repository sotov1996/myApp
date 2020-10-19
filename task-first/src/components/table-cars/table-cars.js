import React, {useState}  from 'react';

import './table-cars.css';

const TableCars = ({ cars, onDeleted, onEdit }) => {

    const [tdName,setName] = useState('');
    const [tdSpeed,setSpeed] = useState('');

    const onChangeTdName = (e) => {
        setName(e.target.value);
    }
    const onChangeTdSpeed = (e) => {
        setSpeed(e.target.value);
    }

    const onChangeName = (item) => {
        return item = tdName ? tdName : item;
    }
    const onChangeSpeed = (item) => {
        return item = tdSpeed ? tdSpeed : item;
    }

    return (
        cars.map((item,index) => {
            return (
                <tr key={item.id} className='my-class'>
                    <td>{index+1}</td>
                    {item.edit ? <td><input value={tdName} onChange={onChangeTdName}></input></td> : <td>{onChangeName(item.name)}</td>}
                    {item.edit ? <td><input value={tdSpeed} onChange={onChangeTdSpeed}></input></td> : <td>{onChangeSpeed(item.speed)}</td>}
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
    
    )
} 
  
export default TableCars;