import React from 'react'
import Title from '../Parts/Title'
import CenterColumn from '../Parts/CenterColumn'
import Header2 from '../Parts/Header2'
import LastRow from '../Parts/LastRow'
import Column from '../Parts/Column'

const Tenth = () => {
  return (
    <>
      <div className="row first">
        <Title />
      </div>
      <div className="row">
      <div className="col-2 border">
          <Column />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col">
              <CenterColumn />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Header2 />
            </div>
          </div>
          <div className="row first">
            <div className="col">
              <LastRow />
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Tenth