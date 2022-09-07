import React, { useState, useEffect } from 'react'

const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("porto")





    useEffect(() => {
        const getWeatherApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=70ea76d349018e4581a22f61e7c045a7`
            const response = await fetch(url)
            const resResult = await response.json();
            setCity(resResult)
        }

        getWeatherApi()

    }, [search])


    return (
        <>
            <h1>Weather APi</h1>
<h1> City : {city?.name}</h1>



        </>
    )
}

export default Weather