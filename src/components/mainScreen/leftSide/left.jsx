import React from 'react'
import '../main.css'
import Add from '../../../Icons/add'
import Location from '../../../Icons/location'
import LeftArrow from '../../../Icons/leftArrow'
import RightArrow from '../../../Icons/rightArrow'
import bulding from '../../../Icons/building.png'




const Left = () => {
    return (
        <>
            <div className="child-left">
                <div className="child-left-nav">
                    <div className='add-btn'><Add /></div>
                    <div className="dots">
                        <div className="current"></div><div className="circle"></div><div className="circle"></div>
                    </div>

                    <div className="toggle">
                        <b className='text-white'>
                            &#176;
                            C
                        </b>

                        <div className="inner-toggle"> <div className="outer-toggle"></div></div>
                        <p className='text-white mb-0'>
                            &#176;
                            F
                        </p>
                    </div>


                </div>
            </div>


            <div className="container text-white ">
                <div className="country-detail d-flex justify-content-between">

                    <div className="div"><Location /> New York, USA</div>
                    <div className="div">07:19</div>
                </div>
                <div className="today-detail d-flex justify-content-between">

                    <div className="div">Today 28 Sept</div>
                    <div className="div">19:32  </div>
                </div>
            </div>

            <div className="carasoul d-flex align-items-center justify-content-between text-white">
                <div><LeftArrow /></div>
                <div style={{ fontSize: "8rem" }}>15&#176;</div>
                <div><RightArrow /></div>
            </div>
            <div>
                <img src={bulding} height={400} style={{ width: "100%" }} className='building' />
            </div>

        </>
    )
}

export default Left