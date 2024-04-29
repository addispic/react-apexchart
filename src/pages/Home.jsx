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
                    enabled: false,
                  },
                  toolbar: {
                    show: false,
                  },
                  dropShadow: {
                    enabled: false,
                    color: "#e01507",
                    blur: 3,
                    opacity: 0.5,
                  },
                },
                stroke: {
                  curve: "smooth",
                  width: 1,
                },
                markers: {
                  //   size: 3,
                  //   shape: "square",
                },
                dataLabels: {
                  enabled: false,
                  //   show: false,
                },
                title: {
                  text: "Fundamental Analysis of Stocks",
                  align: "left",
                },
                subtitle: {
                  text: "Price Movement",
                  align: "left",
                },
                yaxis: {
                  labels: {
                    // show: false,
                  },
                  opposite: true,
                },
                xaxis: {
                  axisBorder: {
                    show: false,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
