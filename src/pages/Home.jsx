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
          <div className="grid grid-cols-3 gap-5">
            <div>one</div>
            <div>two</div>
            <div>three</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
