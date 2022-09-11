import React, { useState, useEffect } from 'react'

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pakistan")

    useEffect(() => {
        const getWeatherApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=70ea76d349018e4581a22f61e7c045a7`
            const response = await fetch(url)
            const resResult = await response.json();
            setCity(resResult)
            console.log(resResult)
        }
        getWeatherApi()
    }, [search])

    return (
        <>
            <div className="bg-no-repeat bg-auto bg-center bg-[url('/bg-2.jpg')] mb-20">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="p-4 xl:w-1/4 md:w-1/2 w-full  bg-slate-100">
                                <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute left-0 top-0 rounded-bl">Country : {city?.sys?.country}</span>
                                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">City : {city?.name}</span>
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">City</h2>
                                    <input onChange={(event) => { setSearch(event.target.value) }} type="text" id="hero-field" name="hero-field" placeholder='Search City' className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <p className="py-0 pl-3 text-xs"> max_temp    <span className="py-0 px-12 text-xs">min_temp</span> </p>
                                    <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-2">
                                        <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">{city?.main?.temp_max} *Cel</button>
                                        <button className="py-1 px-4 focus:outline-none">{city?.main?.temp_min} *Cel</button>
                                    </div>
                                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"></h1>
                                    <div className="border-2 text-xs border-gray-200 px-12 py-6 rounded-lg">
                                        <p className="leading-relaxed">Humidity : {city?.main?.humidity}%</p>
                                        <p className="leading-relaxed">Pressure : {city?.main?.pressure} p</p>
                                        <p className="leading-relaxed">Tempreture : {city?.main?.temp} *Cel</p>
                                    </div>
                                    <p className="flex text-xs items-center text-gray-600 my-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Wind: (Speed : {city?.wind?.speed}, Deg : {city?.wind?.deg})
                                    </p>
                                    <div className="flex text-xs items-center text-gray-600 mb-6">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>
                                        <span>
                                            {city?.weather?.map((data) => {
                                                return <div key={data.id}>Weather : {data?.main}</div>
                                            })}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-3">Literally you know about weather.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Weather