import React from 'react'

import './inputForm.css';

const InputForm = (props) => {
    //props.getWeather
    //props.error

    return(
        <section>
            <div className='formContainer'>
            <div>
            {props.error ? error(): null} </div>
            <form onSubmit={props.getWeather}>
            <ul className='inputContainer'>
            {/* CITY INPUT */}
            <li>
                <input 
                type='text'
                name='city'
                placeholder='City'
                autoComplete="off"
                spellcheck='false'
                 />
            </li>
            {/* COUNTRY INPUT */}
            <li>
                <input 
                type='text'
                name='country'
                placeholder='Country'
                autoComplete="off"
                spellcheck='false'
                />
            </li>
            </ul>
            {/* GET WEATHER BUTTON */}
            <input type="submit" value="Get Weather" />
            </form>
            </div>
        </section>
    );
};

function error() {
    return(
        <div role='alert'>
            <p className='alert'>Please Enter City &amp; Country</p>    
        </div>
    )
}

export default InputForm 

