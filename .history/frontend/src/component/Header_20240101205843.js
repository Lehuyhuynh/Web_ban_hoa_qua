import logo from "../assest/logo .png";
function Header() {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="">
        <div className="">
          <img src={logo} className="h-full" />
        </div>
      </div>
    </header>
  );
}
export default Header;
