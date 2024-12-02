import React from 'react'
import Title from '../Parts/Title'
import Column from '../Parts/Column'
import CenterColumn from '../Parts/CenterColumn'
import Header2 from '../Parts/Header2'
import LastRow from '../Parts/LastRow'

const Eighth = () => {
  return (
    <>
        <div className='row first '>
            <Title/>
        </div>
        <div className="row">
            <div className="col-3">
                <Column/>
            </div>
            <div className="col-9">
                <div className="row">
                    <CenterColumn/>
                </div>
                <div className="row">
                    <Header2/>
                </div>
                <div className="row">
                    <LastRow/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Eighth