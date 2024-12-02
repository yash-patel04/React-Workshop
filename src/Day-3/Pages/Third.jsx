import React from 'react'
import Right from './Right'
import Left from './Left'
import Main from './Main'

const Third = () => {
  return (
    <>
      <div className="col-4">
        <div className='row'>
        <Left />
        </div>
        <div className='row'>
        <Right />
        </div>
      </div>
      <div className="col-8">
        <Main />
      </div>
      
    </>
  )
}

export default Third