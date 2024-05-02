
const Header = () => {
  return (
    <header className="bg-white shadow-md h-[7vh]">
        <div className="max-w-[1200px] mx-auto px-3 h-full flex items-center justify-between">
            <div>
                <h1 className="cursor-pointer w-max font-black"><span>addis</span><span>pic</span></h1>
            </div>
            <div>
                <div className="cursor-pointer flex items-center gap-1">
                    <div className="text-xs flex items-center gap-1 text-gray-700">
                        <span>Addis</span>
                        <span>Fanta</span>
                    </div>
                    <div className="w-[24px] aspect-square object-center object-cover rounded-full overflow-hidden">
                          <img className="w-full h-full object-center object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
