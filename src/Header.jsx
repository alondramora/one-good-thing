import { useState } from "react";

function Header() {
  const [isActive, setActive] = useState(false);
  function handleClick() {
    setActive(!isActive);
    console.log(isActive);
    // toggle the 'active' class on the div.navbar-links
  }

  return (
    <>
      <nav className="navbar">
        <div className="brand-title">One Good Thing</div>
        <a href="#" className="toggle-button" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={"navbar-links " + (isActive ? "active" : "")}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Posts</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
