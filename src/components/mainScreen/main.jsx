import React from 'react'
import Left from './leftSide/left'
import Right from './rightSide/right'

const Main = () => {
    return (
        <div className='container p-0'>
            <div className="row">
                <div className="col-lg-3 col custom-col">
                    <Left />

                </div>
                <div className="col-lg-9 col">

                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Main