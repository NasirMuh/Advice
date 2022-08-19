import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Advice = () => {

  const [advice, setAdvice] = useState('')

  const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const responseJson = await response.json()
    setAdvice(responseJson.slip.advice)
    console.log(responseJson.slip.advice)
  }
  // useEffect(() => {
  
    // getAdvice()

    // axios.get("https://api.adviceslip.com/advice")
    //   .then((response) => {
    //     const { advice1 } = response.data.slip
    //     // console.log(advice)
    //     setAdvice(advice1)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  // })

  return (
    <>
      <h1>advice : {advice}</h1>
      <button onClick={() => getAdvice()}> Get Advice</button>
    </>
  )
}

export default Advice