import React from 'react'

function Button({ text, animition, newstyle }) {
  return (
    <>
      <button className={`bg-indigo-600 rounded-[10px]
       hover:bg-transparent
        hover:text-indigo-600
         border border-indigo-600
          text-white font-mono
           leading-[28px]
            font-semibold
             py-1 px-5 m-5  ${animition} ${newstyle} `} > {text} </button>
    </>
  )
}

export default Button;