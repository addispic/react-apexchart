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
        {/* basic chart */}
        <div>
          <header>
            <h1 className="font-medium text-gray-700">1.1 Basic Chart</h1>
          </header>
          {/* chart */}
          <div>
            <Chart
              type="area"
              height={300}
              width={"65%"}
              series={[
                {
                  name: "STOCK ABC",
                  data: data,
                },
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
                    enabled: true,
                    color: '#4f4f4f',
                    blur: 3,
                    opacity: .25
                  }
                },
                dataLabels: {
                  enabled: false,
                },
                stroke: {
                  curve: 'smooth',
                  width: 1
                },
                colors: ['#038c27'],
                yaxis: {
                  opposite: true
                },
                title: {
                  text: 'Ethiopia The Land Of Wisdom',
                  align: 'left'
                },
                subtitle: {
                  text: 'Bahir Dar, Wisdom',
                  align: 'left'
                },
                xaxis: {
                  axisBorder: {
                    show: false
                  }
                }
              }}
            />
          </div>
        </div>
        {/* spline area */}
        <div className="mt-5">
          <header>
            <h1 className="font-medium text-gray-700">1.2 Spline Area</h1>
          </header>
          <div className="grid grid-cols-1">
            <Chart
              type="area"
              height={350}
              width={'65%'}
              series={[
                {
                  name: 'laptop',
                  data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                  name: 'phone',
                  data: [11, 32, 45, 32, 34, 52, 41]
                },
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
                    enabled: true,
                    color: '#ad0317',
                    blur: 3,
                    opacity: .1
                  }
                },
                colors: ['#128ee6', '#07db3f'],
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  curve: 'smooth',
                  width: 1
                },
                xaxis: {
                  axisBorder: {
                    show: false
                  }
                },
                yaxis: {
                  opposite: true,
                  stepSize: 20,
                  labels: {
                    show: false
                  }

                },
                fill: {
                  type: 'gradient',
                  gradient: {
                    shadeIntensity: 1,
                    opacityFrom: .5,
                    opacityTo: .85,
                    stops: [0, 70, 100]
                  }
                }
              }}
            />
          </div>
        </div>
        {/* github style */}
        <div className="mt-24">
          <header>
            <h1 className="font-medium text-gray-700">1.3 Github STyle</h1>
          </header>
          <div>
            <Chart
              type="area"
              height={250}
              width={'55%'}
              series={[
                {
                  name: 'comments',
                  data: [11, 13, 27, 0, 0, 0, 12, 0, 0, 0, 0, 9, 0, 0, 12, 9, 3, 20, 1, 0, 0, 11, 13, 27, 0, 0, 0, 12, 0, 0, 0, 0, 9, 0, 0, 12, 9, 3, 20, 1, 0, 0, 11, 13, 27, 0, 0, 0, 12, 0, 0, 0, 0, 9, 0, 0, 12, 9, 3, 20, 1, 0, 0]
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
                  background: '#F6F8FA'
                },
                colors: ['#37914f'],
                stroke: {
                  width: 0,
                  curve: 'monotoneCubic'
                },
                dataLabels: {
                  enabled: false
                },
                fill: {
                  opacity: 1,
                  type: 'solid'
                },
                xaxis: {
                  axisBorder: {
                    show: false
                  },
                  labels: {
                    show: false
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
