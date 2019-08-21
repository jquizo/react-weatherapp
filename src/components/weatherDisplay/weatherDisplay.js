import React from 'react'

import './weatherDisplay.css';

const weatherDisplay = (props) => {
    // props.city
    // props.country
    // props.celsius
    // props.description
    // props.weatherIcon
    // props.tempType

    let currentTemp = 0;
    if (props.city) {
        let celsius = parseInt(props.celsius);
        let fahrenheit = parseInt((celsius * 9/5) + 32);

        if (props.tempType === 'C') {
            currentTemp = celsius;
        } else {
            currentTemp = fahrenheit;
        }
    }

    return (
        <section>
            <div className='weatherDisplayContainer'>
                <div className='weatherDisplayContent'>
                <i className={`wi ${props.weatherIcon} display-1`}></i>
                {props.celsius ? (<p className='temp'> {props.city ? currentTemp : ''}°</p>): null}
                <p className='location'><strong>{props.city}</strong> </p>  
                <h4>{props.description.toUpperCase()}</h4>
                </div>
            </div>
        </section>
    )
}

export default weatherDisplay

    

