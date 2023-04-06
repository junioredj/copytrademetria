import { Link, useLocation } from "react-router-dom";

import { DropdownProfile } from "../Profile/DropdownProfile";
import { Navbar } from "./Navbar";

import LogoHeader from "../../img/LOGO2.png";
import BtnMobile from "../../img/btn-mobile.svg";
import { useEffect } from "react";

export function Header() {
  function menuOpened() {
    document.documentElement.classList.toggle("menu-opened");
  }

  const location = useLocation();
  useEffect(() => {
    document.documentElement.classList.remove("menu-opened");
  }, [location]);
  return (
    <>
      <header>
        <div className="container">
          <div className="menu-mobile">
            <div className="overlay" onClick={menuOpened}></div>
            <div className="left-area">
              <div className="logo">
                <Link to="/dashboard">
                  <img src={LogoHeader} alt="Logo Dashboard" />
                </Link>
              </div>
              <div className="profile">
                <DropdownProfile />
              </div>

              <Navbar />
            </div>
          </div>

          <div className="left-area">
            <div className="logo">
              <Link to="/dashboard">
                <img src={LogoHeader} alt="Logo Dashboard"/>
              </Link>
            </div>
            <div className="profile">
              <DropdownProfile />
            </div>
          </div>

          <button onClick={menuOpened} className="btn-mobile">
            <img src={BtnMobile} alt="Menu" />
          </button>
        </div>
      </header>
      <Navbar />
    </>
  );
}
