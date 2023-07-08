import React from 'react'
import Drop from '../../../Icons/drop'
import ThunderStorm from '../../../Icons/thunderStorm'
import Air from '../../../Icons/air'
import Sun from '../../../Icons/sun'
import Temperature from '../../../Icons/temperature'
import Umbrella from '../../../Icons/umbrella'




const SixBoxes = () => {



    const weatherData = [{
        weatherType: "Humidity",
        icon: "icon",
        percentage: "82%",
        condition: "bad",
        progress1: "good",
        progress2: "normal",
        progress3: "bad"
    },
    {
        weatherType: "Wind",
        icon: "drop",
        percentage: "8km/h",
        condition: "bad",
        progress1: "good",
        progress2: "normal",
        progress3: "bad"
    },
    {
        weatherType: "Precipitation",
        icon: "drop",
        percentage: "1.4cm",
        condition: "bad",
        progress1: "good",
        progress2: "normal",
        progress3: "bad"
    },
    {
        weatherType: "UV index",
        icon: "drop",
        percentage: "4 medium",
        condition: "bad",
        progress1: "good",
        progress2: "normal",
        progress3: "bad"
    },
    {
        weatherType: "Feels Like",
        icon: "drop",
        percentage: "30 ",
        condition: "bad",
        progress1: "good",
        progress2: "normal",
        progress3: "bad"
    },
    {
        weatherType: "Chance of rain",
        icon: "drop",
        percentage: "42%",
        condition: "bad",
        progress1: "good",
        progress2: "normal",
        progress3: "bad"
    },



    ]

    return (
        <>

            {
                weatherData && weatherData?.map((weather, index) => (
                    <div className="boxes mt-5" key={index}>
                        <div className="heading-name d-flex justify-content-between">
                            <div className="name">
                                {weather.weatherType}
                            </div>
                            <div className="icon" >
                                {index == 0 ? <Drop /> : index == 1 ? <ThunderStorm /> : index == 2 ? <Air /> : index == 3 ? <Sun /> : index == 4 ? <Temperature /> : index == 5 ? <Umbrella /> : ''}

                            </div>
                        </div>
                        <div className="percentage d-flex justify-content-center">
                            <div className="percentage-number">
                                <span className='font-24'>
                                    82%
                                </span>  <span>

                                    bad
                                </span>
                            </div>

                        </div>
                        <div className="progress-parent d-flex justify-content-center">
                            {
                                index == 0 ? (
                                    <div className="progress-container text-grey">
                                        <div>

                                            <label>good</label>
                                            <progress className="file" value="32" max="100"> 32% </progress>
                                        </div>
                                        <div>

                                            <label>normal</label>
                                            <progress className="file" value="32" max="100"> 32% </progress>
                                        </div>
                                        <div>
                                            <label>bad</label>

                                            <progress className="file" value="32" max="100"> 32% </progress>
                                        </div>

                                    </div>
                                ) : index == 1 ?
                                    "unable to make"
                                    : index == 2 ? (
                                        <div className="progress-container text-grey">
                                            <div>

                                                <label>0</label>
                                                <progress className="file " value="100" max="100" style={{ width: "15px" }} > 32% </progress>
                                            </div>
                                            <div>

                                                <label>10</label>
                                                <progress className="file " value="70" max="100" style={{ width: "15px" }} > 70% </progress>
                                            </div>
                                            <div>
                                                <label>20</label>

                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 0% </progress>
                                            </div>
                                            <div>

                                                <label>30</label>
                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 0% </progress>
                                            </div>
                                            <div>

                                                <label>40</label>
                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 0% </progress>
                                            </div>
                                            <div>
                                                <label>50</label>

                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 0% </progress>
                                            </div>
                                            <div>

                                                <label>60</label>
                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 32% </progress>
                                            </div>
                                            <div>

                                                <label>70</label>
                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 0% </progress>
                                            </div>
                                            <div>
                                                <label>80</label>

                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 0% </progress>
                                            </div>
                                            <div>
                                                <label>90</label>

                                                <progress className="file " value="0" max="100" style={{ width: "15px" }} > 32% </progress>
                                            </div>
                                        </div>
                                    ) : index == 3 ? (
                                        <div className="progress-container text-grey">
                                            <div>

                                                <label>0-2</label>
                                                <progress className="file" value="32" max="100" style={{ width: "30px" }}> 32% </progress>
                                            </div>
                                            <div>

                                                <label>3-5</label>
                                                <progress className="file" value="32" max="100" style={{ width: "30px", }}> 32% </progress>
                                            </div>
                                            <div>
                                                <label>6-7</label>

                                                <progress className="file" value="32" max="100" style={{ width: "30px", }}> 32% </progress>
                                            </div>

                                            <div>
                                                <label>8-10</label>

                                                <progress className="file" value="32" max="100" style={{ width: "30px", }}> 32% </progress>
                                            </div>
                                            <div>
                                                <label>11+</label>

                                                <progress className="file" value="32" max="100" style={{ width: "30px", }}> 32% </progress>
                                            </div>

                                        </div>

                                    ) : index == 4 ? (
                                        <div className=" text-grey w-100" >
                                            <div className='w-100 d-flex justify-content-between'>

                                                <label>0&#176;</label>  <label>25&#176;</label>  <label>50&#176;</label>
                                            </div>
                                            <progress className="file" value="60" max="100" style={{ width: "100%", }}>  </progress>


                                        </div>
                                    ) : index == 5 ? (
                                        <div className=" text-grey w-100" >
                                            <div className='w-100 d-flex justify-content-between'>

                                                <label>0%</label><label>25%</label><label>50%</label><label>25%</label><label>50%</label>
                                            </div>
                                            <progress className="file" value="40" max="100" style={{ width: "100%", }}> 42% </progress>


                                        </div>
                                    ) : ""
                            }


                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default SixBoxes