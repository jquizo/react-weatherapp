import React, { Component } from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css';

// COMPONENTS
import Info from './components/info/Info'
import InputForm from './components/inputForm/inputForm'
import WeatherDisplay from './components/weatherDisplay/weatherDisplay'

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      maxTemp: undefined,
      minTemp: undefined,
      description: '',
      error: false,
      //TEMPERATURE TYPE
      tempType: 'C'
    };

    this.weatherIcon= {
      Thunderstorm: "wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  setTempType = () => {
    if(this.state.tempType === 'C') {
      this.setState({tempType:'F'})
    } else {
      this.setState({tempType:'C'})
    }
  }

  getWeatherIcon(icons,rangeId) {
    switch(true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;  
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon:this.weatherIcon.Snow});
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({icon:this.weatherIcon.Atmosphere});
        break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
      default:
        this.setState({icon:this.weatherIcon.Clouds});
    }
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=b0ea363db2a0a285f5263ede3c11b099`);
    
    if(response.ok) {

    const data = await response.json();
    
    this.setState({
      city: `${data.name}, ${data.sys.country}`,
      country: data.sys.country,
      celsius: data.main.temp,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
      description: data.weather[0].description,
      error: false
    });

    this.getWeatherIcon(this.weatherIcon, data.weather[0].id );
  } else {
    this.setState({error:true});
   };
  };

  render() {
    return (
      <main>
        <Info 
        tempType={this.state.tempType}
        setTempType={this.setTempType}
        />
        <WeatherDisplay
        city={this.state.city} 
        country={this.state.country}
        celsius={this.state.celsius}
        maxTemp={this.state.maxTemp}
        minTemp={this.state.minTemp}
        description={this.state.description}
        weatherIcon={this.state.icon}
        tempType={this.state.tempType}
        />
        <InputForm 
        getWeather={this.getWeather}
        error={this.state.error}
        />
      </main>
    )
  }
}

export default App
