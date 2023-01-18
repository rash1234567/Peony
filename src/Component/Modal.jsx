import React from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

export default function Modal() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    setShowModal(true)
  }, [])
  
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-greatVibes"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-[Blue] font-semibold">
                   Dear Maryam
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-[Blue] opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-[blue] text-lg leading-relaxed">
                  They say friends are the family we choose. If that’s the case, then you are an equivalent to a sibling. Pretty significant relationship, right? That means your birthdays are just as special as they are and worthy of honoring. After all, it is the day marking your entry into the world. Plus, it only comes once a year. That’s why it is the perfect opportunity to let you know just how much you mean to you.<br/>
                  <span className="font-[600]">Happy Birthday Baby❤❤❤</span>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => 
                        { navigate('/');
                        setShowModal(false)}}
                  >
                    Continue
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}