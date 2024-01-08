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

        <div className="">
          <nav>
            <Link to={""}> Home</Link>
            <Link to={"menu"}> Menu</Link>
            <Link to={"about"}> About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="">
            <BsCartFill />
          </div>
          <div className="">
            <HiOutlineUserCircle></HiOutlineUserCircle>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
