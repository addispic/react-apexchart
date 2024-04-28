import Chart from "react-apexcharts";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1200px] px-3 mx-auto">
        <header>
          <h1 className="text-lg font-medium text-gray-700 w-max underline uppercase">
            1.Line Charts
          </h1>
        </header>
        <div>
          {/* basic charts */}
          <header className="my-3">
            <h3 className="font-bold text-gray-700">1.1 Basic Line Charts</h3>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* chart one */}
            <div>
              <Chart
                type="line"
                height={200}
                series={[
                  {
                    name: "Laptop",
                    data: [
                      120, 110, 130, 132, 136, 150, 151, 170, 172, 170, 178,
                      180, 200,
                    ],
                  },
                ]}
                options={{
                  stroke: {
                    curve: "smooth",
                    width: 1,
                  },
                  markers: {
                    size: 0,
                    shape: "square",
                  },
                  colors: ["#5d05b5"],
                  chart: {
                    zoom: {
                      enabled: false,
                    },

                    toolbar: {
                      show: false,
                    },
                    dropShadow: {
                      enabled: true,
                      color: "#5d05b5",
                      top: 3,
                      blur: 0.15,
                      opacity: 0.05,
                    },
                  },
                  grid: {
                    // borderColor: "#40d102",
                    // row: {
                    //   colors: ["#d102a8", "transparent"],
                    //   opacity: 0.15,
                    // },
                    padding: {
                      top: -24,
                      bottom: -12,
                    },
                  },
                  title: {
                    text: "Basic Line Chart Demo",
                    align: "center",
                    offsetY: 3,
                  },
                  xaxis: {
                    categories: [
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Pua",
                    ],
                    axisTicks: {
                      show: false,
                    },
                    axisBorder: {
                      show: false,
                    },
                  },
                }}
              />
            </div>
            {/* chart two */}
            <div>
              <Chart
                type="line"
                height={200}
                series={[
                  {
                    name: "smart phone",
                    data: [
                      12000, 12300, 12350, 12500, 13000, 13100, 13000, 13500,
                      14000, 14500, 14590, 14800, 18000, 20000,
                    ],
                  },
                  {
                    name: "tablets",
                    data: [
                      15000, 15300, 15350, 15500, 13000, 17100, 16000, 17500,
                      18000, 17500, 17590, 18800, 18000, 25000,
                    ],
                  },
                  {
                    name: "desktop",
                    data: [
                      9000, 9300, 10350, 11500, 12000, 12100, 12000, 12500,
                      13000, 13500, 13590, 13800, 15000, 17000,
                    ],
                  },
                ]}
                options={{
                  chart: {
                    zoom: {
                      enabled: true,
                    },
                    toolbar: {
                      show: false,
                    },
                    dropShadow: {
                      enabled: true,
                      color: "#000000",
                      top: 3,
                      blur: 0,
                      opacity: 0.05,
                    },
                  },
                  stroke: {
                    curve: "smooth",
                    width: 1,
                    colors: ["#d1023d", "#02d13d", "#021ad1"],
                  },
                  grid: {
                    yaxis: {
                      lines: {
                        show: false,
                      },
                    },
                    xaxis: {
                      lines: {
                        show: false,
                      },
                    },
                  },
                  xaxis: {
                    lines: {
                      show: false,
                    },
                    labels: {
                      show: false,
                    },
                    axisTicks: {
                      show: false,
                    },
                    axisBorder: {
                      show: false,
                    },
                  },
                  yaxis: {
                    labels: {
                      show: false,
                    },
                    lines: {
                      show: false,
                    },
                  },
                  legend: {
                    position: "bottom",
                    offsetY: -24,
                  },
                }}
              />
            </div>
            <div>
              <Chart
                type="line"
                height={200}
                series={[
                  {
                    name: "Bahir Dar",
                    data: [
                      20, 40, 20, 40, 20, 40, 20, 40, 20, 40, 20, 40, 20, 40,
                      20,
                    ],
                  },
                  {
                    name: "Gonder",
                    data: [
                      50, 10, 50, 10, 50, 10, 50, 10, 50, 10, 50, 10, 50, 10,
                      50,
                    ],
                  },
                  {
                    name: "Debre Birhan",
                    data: [
                      15, 30, 15, 30, 15, 30, 15, 30, 15, 30, 15, 30, 15, 30,
                      15,
                    ],
                  },
                ]}
                options={{
                  chart: {
                    zoom: {
                      enabled: false,
                    },
                    toolbar: {
                      show: false,
                    },
                  },
                  stroke: {
                    curve: "smooth",
                    width: 1,
                    colors: ["#04bbdb", "#04db1d", "#db04d8"],
                  },
                  xaxis: {
                    axisBorder: {
                      //   show: false,
                    },
                  },
                  yaxis: {
                    axisBorder: {
                      show: true,
                    },
                  },
                  grid: {
                    yaxis: {
                      lines: {
                        width: 0,
                        show: false,
                      },
                    },
                    padding: {
                      left: 15,
                    },
                  },
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
