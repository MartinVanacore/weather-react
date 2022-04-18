import React, { useState } from 'react'
import axios from 'axios'


export const useWeather = () => {

    const APIkey = '17557c81d21a1ff9551817bca3893526'
    
    const [weather, setWeather] = useState('');
    const [coming, setComing] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [isError, setError] = useState(false);
   

    
        //weather
        const getWeather = async location => {
            
            setLoading(true);
            
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}&units=metric`;

            const data = await axios(urlWeather)
                                .catch(error =>{
                                                    console.log(error);
                                                    setLoading(false);
                                                    setShow(false);
                                                    setError(true);

                                                    return;
                                                });

            
            setWeather(data);
            setShow(true);
            // console.log(data);
            return data;
        }
        

        //upcoming
        const getUpcoming = async location => {

            const urlUpcoming = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIkey}&units=metric`;

            const coming = await axios(urlUpcoming)
                                    .catch(error =>{
                                                        console.log(error);
                                                        setLoading(false);
                                                        setShow(false);
                                                        setError(true);

                                                        return; 
                                                    });
            

            setComing(coming);
            setShow(true);        
            // console.log(coming);
            return coming;
        }
        

        const submitRequest = async location => {
            console.log(location);
            setLoading(true);
            setError(false);
            const weatherData = await getWeather(location)
            const upcomingData = await getUpcoming(location);
            
            console.log(weatherData);
            console.log(upcomingData);
            setLoading(false);
           
        }
        


  return {
      submitRequest,
      weather,
      coming,
      loading,
      show,
      isError,
      
  }
}