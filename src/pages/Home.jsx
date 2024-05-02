import Chart from "react-apexcharts";

const Home = () => {
  let data = [
    8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85,
    8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1,
    9340.85,
  ];

  return (
    <div>
      {/* container */}
      <div className="max-w-[1200px] mx-auto px-3">
        {/* header */}
        <header className="py-3">
          <h1 className="w-max font-bold text-gray-700 underline uppercase">
            1. Area Charts
          </h1>
        </header>
        <div>
          {/* basic area chart */}
          <div>
            <header>
              <h3 className="font-semibold text-gray-700">1.1 Basic Area Chart</h3>
            </header>
            <div>
              <Chart
                type="area"
                height={350}
                width={'65%'}
                series={[
                  {
                    name: 'products',
                    data
                  }
                ]}
                options={{
                  chart: {
                    zoom: {
                      enabled: false
                    },
                    toolbar: {
                      show: false
                    },
                    dropShadow: {
                      enabled: false,
                      color: '#040d78',
                      blur: 3,
                      opacity: 1
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'smooth',
                    width: 1
                  },
                  markers: {
                    size: 2,
                    shape: 'circle',
                    strokeWidth: 0,
                    strokeColors: '#040d78'
                  },
                  fill: {
                    type: 'gradient',
                    gradient: {
                      shadeIntensity: .5,
                      opacityFrom: .1,
                      opacityTo: .5,
                      stops: [0, 100]
                    }
                  },
                  xaxis: {
                    axisBorder: {
                      show: false
                    }
                  },
                  yaxis: {
                    opposite: true
                  },
                  title: {
                    text: 'Ethiopia The Land Of Wisdom',
                    align: 'left'
                  },
                  subtitle: {
                    text: 'Bahir Dar The City Of Light',
                    align: 'left'
                  },
                  grid: {
                    padding: {
                      top: -24,
                      bottom: -12,
                    }
                  },
                  annotations: {
                    yaxis: [
                      {
                        y: 8200,
                        borderColor: '#04911e',
                        strokeDashArray: 0,
                        label: {
                          text: 'danger zone',
                          borderColor: '#04911e',
                          borderRadius: 3,
                          style: {
                            color: '#fff',
                            background: '#04911e',
                            fontSize: 14
                          }
                        }
                      }
                    ],
                    xaxis: [
                      {
                        x: 5,
                        x2: 10,
                        borderColor: '#cf7208',
                        strokeDashArray: 0,
                        fillColor: '#cf7208',
                        opacity: .2
                      }
                    ],
                    points: [
                      {
                        x: 14,
                        y: 8607.55,
                        marker: {
                          size: 12,
                          strokeColor: '#7804b3',
                          strokeWidth: 1,
                          fillColor: '#FFF'
                        },
                        label: {
                          text: 'Climax Point',
                          borderColor: '#7804b3',
                          borderWidth: 0,
                          borderRadius: 5,
                          style: {
                            color: '#fff',
                            background: '#7804b3',
                            fontSize: 12
                          }
                        }
                      }
                    ]
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
