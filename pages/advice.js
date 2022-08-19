import React, { useState } from 'react'
const Advice = () => {
  const [advice, setAdvice] = useState('')

  const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const responseJson = await response.json()
    setAdvice(responseJson.slip.advice)
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col border-8 bg-gray-100 border-gray-200 rounded-lg mt-10">
          <div className="flex justify-center mb-4">
            <button onClick={() => getAdvice()} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Advice</button>
          </div>
          <div className="text-center lg:w-2/3 w-full   lg:h-36 md:h-56">
            <p className=" leading-relaxed justify-center items-center p-8">{advice}</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Advice