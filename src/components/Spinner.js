import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
  return (
       <div className="container text-center pad">
        <img src={loading} alt="loading" />
       </div>
    )
  
}
