import React, { useState } from 'react'
import useCopy from 'use-copy';
import AddIcon from "@material-ui/icons/Add";
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Advice = () => {
  const [isShow, setIsShow] = useState(true);
  const [advice, setAdvice] = useState('')
  const [copied, copy, setCopied] = useCopy(advice);

  const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const responseJson = await response.json()
    setAdvice(responseJson.slip.advice)
    setIsShow(false)
  }

  const copyText = () => {
    copy();
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const notify = () => toast('🦄 Copied!', {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <>

        <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

        <section className="text-gray-600 body-font">

          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col border-8 bg-gray-100 border-gray-200 rounded-lg mt-10">

            <div className="flex justify-center mb-4">
              <Button onClick={() => getAdvice()} variant="contained" className='flex'>
                Advice <AddIcon />
              </Button>
            </div>

            {isShow ? null : <div className="text-center  lg:w-2/3 w-full lg:h-36 md:h-56">
              {copied ? "Copied" : <a onClick={copyText}><h2 onClick={notify} className="border-2 bg-white leading-relaxed justify-center items-center p-2">{advice}
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-5 sm:h-5 w-5 h-5" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg></h2></a>}
            </div>

            }
          </div>


        </section>

    </>
  )
}

export default Advice



