import React from 'react';

import '../add-cars/add-car.css';


const AddCar = ({ onAddCar }) => {

    return (
        <div className='add-car'>
            <button type="button" 
                    className="btn btn-primary"
                    onClick={onAddCar}>+</button>
        </div>

    )
}

export default AddCar;