import React from 'react'
import { Spinner } from './Spinner'
import { Error } from './Error'
import moment from 'moment'


export const Card = ({weather, coming, isError, loading, show}) => {

    if(loading){
        return <Spinner />
    }
    if (isError)  {
        
        console.log("ERR")
        return <Error />
        };
   

    const date = moment().format('DD/MM/YYYY');  
    // const date1 = moment(coming.data.list[3].dt_txt).format('DD/MM/YYYY');
    // const date2 = moment(coming.data.list[13].dt_txt).format('DD/MM/YYYY');
    
    
  return (
    <div className='mt-5'>
        {
            show === true  ? (

                <div className='container'>
                    <div className='card mb-3 mx-auto bg-dark text-light'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <h3 className='card-title'> {weather.data.name} </h3>
                                <p className='card-date'>{date}</p>
                                <h1 className='card-temp'>{Math.round(weather.data.main.temp)}°C</h1>
                                <p className='card-description'> {weather.data.weather[0].description} </p>
                                <img src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`} alt='icon' className='card-icon'/>
                                <img src='https://cdn.pixabay.com/photo/2016/11/22/23/06/beach-1851083_1280.jpg' alt='img-faro' className='img-fluid rounded-start mx-auto'/>
                                
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body text-start mt-2'>
                                        <p className="card-text">Temp máx: {weather.data.main.temp_max}ºC</p>
                                        <p className="card-text">Temp mín: {weather.data.main.temp_min}ºC</p>
                                        <p className="card-text">Feel: {weather.data.main.feels_like}ºC</p>
                                        <p className="card-text">Humidity: {weather.data.main.humidity}%</p>
                                        <p className="card-text">Wind Speed: {weather.data.wind.speed}m/s</p>
                                        

                                </div>
                                <hr/>
                                <div className='row mt-2'>
                                    <div className='col-6'> 
                                        <h4 className='coming1 date'>{moment(coming.data.list[3].dt_txt).format('DD/MM/YYYY')}</h4>
                                        
                                        <h1 className='coming1'>{Math.round(coming.data.list[3].main.temp)}°C</h1>
                                        
                                        <img src={`http://openweathermap.org/img/wn/${coming.data.list[3].weather[0].icon}.png`} alt='icon' className='coming1'/>
                                        <p className='coming1'> {coming.data.list[3].weather[0].description} </p>
                                    </div>

                                    <div className='col-6'> 
                                        <h4 className='coming2 date'>{moment(coming.data.list[13].dt_txt).format('DD/MM/YYYY')}</h4>
                                        
                                        <h1 className='coming2'>{Math.round(coming.data.list[13].main.temp)}°C</h1>
                                        
                                        <img src={`http://openweathermap.org/img/wn/${coming.data.list[13].weather[0].icon}.png`} alt='icon' className='coming2'/>
                                        <p className='coming2'> {coming.data.list[13].weather[0].description} </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            ) : (
                <div></div> 
            )

            
        }
    
    
    </div>
  )
}
