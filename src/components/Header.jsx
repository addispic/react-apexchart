import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[7vh] bg-white shadow-md">
      <div className="h-full max-w-[1200px] mx-auto px-3 flex items-center justify-between">
        {/* left */}
        <div>
          <NavLink className={'font-black text-lg text-gray-700'}>
            <span>addis</span>
            <span className="text-gray-500">pic</span>
          </NavLink>
        </div>
        {/* right */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Addis</span>
              <span>Fanta</span>
            </div>
            <div className="w-[32px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full h-full object-center object-cover"
                src="/addis-fanta.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
