import logo from "../assest/logo .png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
function Header() {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}> Home</Link>
            <Link to={"menu"}> Menu</Link>
            <Link to={"about"}> About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-2xl text-slate-600">
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              <HiOutlineUserCircle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
