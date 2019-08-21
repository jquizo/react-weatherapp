import React from 'react'
import './Info.css'
import background from '../../img/background.svg';


const Info = (props) => {
    // props.tempType
    // props.setTempType
    
    return (
        <section>
            <img src={background} alt='background' id='background' />
            <h1 id='weather'>WEATHER</h1>
            <hr />
            <h1 id='forecast'>FORECAST</h1>
            <p className='description'>Minimalistic weather app created using React. 
            <br />
            Powered using Openweathermaps API.
            <br/>Design by Bone Crush Media from Youtube.</p>
            <div className='tempbuttons'>
                <p>Your weather is currently showing in <strong>:</strong> </p>
                <div className='buttons'>
                    {/*-----CELSIUS BUTTON----- */}
                    <div className='btn'> 
                    {props.tempType === 'C' ?
                        <button className='clicked'>C</button>
                        :
                        <button onClick={props.setTempType}>C</button>
                    }
                    
                        <p><strong>Celsius</strong></p>
                    </div>
                    {/*-----FAHRENHEIT BUTTON-----*/}
                    <div className='btn'> 
                    {props.tempType ==='F' ?
                        <button className='clicked'>F</button>
                        :
                        <button onClick={props.setTempType}>F</button>
                    }
                        <p><strong>Fahrenheit</strong></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
