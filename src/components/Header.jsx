import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white h-[7vh] shadow-md">
      {/* header content */}
      <div className="max-w-[1200px] h-full mx-auto px-3 flex items-center justify-between">
        {/* left */}
        <div>
          <NavLink className={"font-black text-lg"}>
            <span>addis</span>
            <span className="opacity-50">pic</span>
          </NavLink>
        </div>
        {/* right */}
        <div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>Addis</span>
              <span>Fanta</span>
            </div>
            <div className="w-[28px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full h-full object-center object-cover"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
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
