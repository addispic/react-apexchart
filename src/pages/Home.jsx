import Chart from 'react-apexcharts'

const Home = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto px-3">
                <header>
                    <h1 className="font-bold">1. Column Chart</h1>
                </header>
                {/* basic chart */}
                <div>
                    <header>
                        <h3 className="font-medium">1.1 Basic Column Chart</h3>
                    </header>
                    <div>
                        <Chart
                            type='bar'
                            height={300}
                            width={'75%'}
                            series={[
                                {
                                    name: 'Net Profit',
                                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                                }, {
                                    name: 'Revenue',
                                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                                }, {
                                    name: 'Free Cash Flow',
                                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                                }
                            ]}
                            options={{
                                chart: {
                                    zoom: {
                                        enabled: true,
                                    },
                                    toolbar: {
                                        show: false,
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                },
                                yaxis: {
                                    labels: {
                                        show: false
                                    }
                                },
                                plotOptions: {
                                    bar: {
                                        horizontal: false,
                                        columnWidth: '35%'
                                    }
                                },
                                stroke: {
                                    width: 2,
                                    colors: ['transparent']
                                },
                                tooltip: {
                                    y: {
                                        formatter: function (val) {
                                            return `${val} thousands`
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
                {/* column chart with data labels */}
                <div>
                    <header>
                        <h3 className='font-medium'>1.2 Column Chart with Data Labels</h3>
                    </header>
                    <div>
                        <Chart
                            type='bar'
                            height={300}
                            width={'45%'}
                            series={[
                                {
                                    name: 'comments',
                                    data: [12, 5, 24, 15, 3, 5, 10, 12, 14, 8, 10]
                                }
                            ]}
                            options={{
                                chart: {
                                    zoom: {
                                        enabled: true,
                                    },
                                    toolbar: {
                                        show: false
                                    }
                                },
                                grid: {
                                    yaxis: {
                                        lines: {
                                            show: false
                                        }
                                    }
                                },
                                yaxis: {
                                    labels: {
                                        show: false
                                    }
                                },
                                xaxis: {
                                    axisBorder: {
                                        show: false
                                    },
                                    axisTicks: {
                                        show: false
                                    },
                                    labels: {
                                        show: false
                                    }
                                },
                                plotOptions: {
                                    bar: {
                                        borderRadius: 12,
                                        // horizontal: true,
                                        dataLabels: {
                                            position: 'top'
                                        }
                                    }
                                },
                                dataLabels: {
                                    formatter: function (val) {
                                        return `${val}%`
                                    },
                                    offsetY: -24,
                                    style: {
                                        colors: ['#260175'],
                                        fontSize: 14
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
                {/* column chart with dumbbells */}
                <div>
                    <header>
                        <h3 className='font-medium'>1.3 Dumbbell Charts</h3>
                    </header>
                    <div>
                        <Chart
                            type='rangeBar'
                            height={300}
                            width={'45%'}
                            series={[
                                {
                                    name: 'products',
                                    data: [
                                        {
                                            x: '2010',
                                            y: [200, 400]
                                        },
                                        {
                                            x: '2012',
                                            y: [200, 500]
                                        },
                                        {
                                            x: '2014',
                                            y: [200, 600]
                                        },
                                        {
                                            x: '2016',
                                            y: [300, 700]
                                        },
                                        {
                                            x: '2018',
                                            y: [200, 800]
                                        },
                                        {
                                            x: '2020',
                                            y: [300, 900]
                                        },
                                    ]
                                }
                            ]}
                            options={{
                                chart: {
                                    zoom: {
                                        enabled: true,
                                    },
                                    toolbar: {
                                        show: false
                                    }
                                },
                                plotOptions: {
                                    bar: {
                                        columnWidth: 3,
                                        isDumbbell: true,
                                        // horizontal: true,
                                        // dumbbellColors: [['#f00222', '#04bf3f']],

                                    }
                                },
                                fill: {
                                    type: 'gradient',
                                    gradient: {
                                        type: 'vertical',
                                        // gradientToColors: '#049dbf',
                                        // inverseColors: true,
                                        stops: [0, 90]
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
