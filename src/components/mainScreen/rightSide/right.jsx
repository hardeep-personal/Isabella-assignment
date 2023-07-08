import React, { useEffect, useRef, useState } from 'react'
import '../main.css'
import SixBoxes from '../sixBoxes/sixBoxes'
import HorizontalDots from '../../../Icons/horizontalDots'
import userImage from '../../../Icons/user.jpg'
import Chart from 'chart.js/auto';
import BottomArrow from '../../../Icons/bottomArrow'
import RArrowB from '../../../Icons/rArrowB'

const Right = () => {
    const snoozeGraphData = []
    const heartGraphData = ['23', '28', '58', '23', '28', '58']
    const dislikeGraphData = []
    const partyGraphData = []
    const [myChart, setMyChart] = useState(null)
    const chartLabels = ['23%', '28%', '58%', '23%', '28%', '58%']
    const initChart = () => {
        const ctx = document.getElementById('weatherChart')?.getContext('2d');

        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [{
                    data: heartGraphData,
                    backgroundColor: '#5e72e4 ',
                    borderColor: '#5e72e4 ',
                    borderWidth: 1,
                    fill: true,
                    tension: 0.1
                },]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            beginAtZero: false,
                            display: false,

                        },
                        grid: {
                            borderDash: [8, 4],
                            display: false,
                        },
                    },
                    x: {
                        ticks: {
                            autoSkip: true
                        },
                        grid: {
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        height: 1,
                        labels: {
                            boxHeight: 2,
                            padding: 20
                        }
                    }
                },
                tickBorderDash: [0, 500]
            }
        });
        setMyChart(chart)
    }

    let mounted = useRef(null)

    useEffect(() => {
        if (!mounted.current) {
            setTimeout(() => {
                let chartStatus = Chart.getChart("weatherChart");
                if (chartStatus != undefined) {
                    chartStatus.destroy();
                }
                initChart()
                mounted.current = true
            }, 1000);
        }
    }, [])





    return (
        <>
            <div className="child-right">
                <div className="nav">
                    <div className="nav-left">
                        <p className='welcome-isabella'>

                            welcome back isabella!
                        </p>
                        <small>Check out today's weather information</small>
                    </div>
                    <div className="nav-right">
                        <span><HorizontalDots /></span>
                        <img src={userImage} alt='user-image' style={{ height: "50px", width: "50px", borderRadius: "15px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div className="graph w-100" style={{ height: "auto" }}>

                    <div className="chart-header d-flex justify-content-between p-2">
                        <b className="mb-0">Upcoming hours</b>
                        <div>
                            <button className="  my-btn border" disabled >Rain Precipitation <BottomArrow /></button>     <button className=" my-btn">Next days <RArrowB /></button>

                        </div>
                    </div>

                    <div>   

                        <canvas id="weatherChart" width="1200" style={{ maxWidth: '100%' }} height="400"></canvas>
                    </div>

                </div>
                <div className="report">
                    <p className='mb-0 ' style={{ fontWeight: "bold" }}>More details of today's weather</p>
                    <div className="d-flex flex-wrap justify-content-between">


                        <SixBoxes />

                    </div>
                </div>
            </div >
        </>
    )
}

export default Right