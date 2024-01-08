import logo from "../assest/logo .png";
function Header() {
  return (
    <div>
      {/* desktop */}
      <div className="">
        <div className="">
          <img src={logo} className="h-full" />
        </div>
      </div>
    </div>
  );
}
export default Header;
