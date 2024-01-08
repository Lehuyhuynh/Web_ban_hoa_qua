import logo from "../assest/logo .png";
function Header() {
  return (
    <header className="">
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
