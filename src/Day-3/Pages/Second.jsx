import React from 'react'
import Right from './Right'
import Left from './Left'
import Main from './Main'

const Second = () => {
  return (
    <>
      <div className="col-6">
        <Main />
      </div>
      <div className="col-3">
        <Left />
      </div>
      <div className="col-3">
        <Right />
      </div>
    </>
  );
};

export default Second;
