import React, { useEffect, useState } from 'react'
import "views/index.css"

function Loader() {

    const [LoaderText, setLoaderText] = useState("")
    
    const textArray = ['Please Wait', `Patience is not simply the ability to wait - it's how we behave while we're waiting.`, "You usually have to wait for that which is worth waiting for.", "We must be willing to let go of the life we have planned, so as to have the life that is waiting for us."]


    useEffect(() => {
        let index = 0
        setInterval(() => {
            if (index !== textArray.length) {
                index++;
            }
            else {
                index=0
            }
            setLoaderText(textArray[index])
        },7000)
    },[])

    return (
        <div className="loader-body">
            <div className="loading"> 
  <svg width="16px" height="12px">
    <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
    <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                </svg>

                <span style={{ fontSize: 8, marginLeft: 10 }}>{LoaderText}</span>
                 </div>
            </div>
    )
}

export default Loader
