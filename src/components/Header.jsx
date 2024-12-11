import "./Header.css";
import logo from "../assets/image/Vector.svg";
function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="" />
        <nav className="block">
          <a href=""> Features</a>
          <a href=""> Pricing</a>
          <a href=""> Resources</a>
        </nav>
        <div className="container">
          <button className="click-1"> Log in</button>
          <button className="click-2">Sign up</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
