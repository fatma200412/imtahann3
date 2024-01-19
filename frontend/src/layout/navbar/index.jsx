import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.element}>
          <div className={style.pulse}>
            <h2>
              Pulse <span>.</span>
            </h2>
          </div>
          <div className={style.navlists}>
            <ul className={style.lists}>
              <li className={style.list}>
                <Link to="/" className={style.link}>
                  Home
                </Link>
              </li>
              <li className={style.list}>
                <Link to="/add" className={style.link}>
                  Add
                </Link>
              </li>
              <li className={style.list}>
                <Link to="/basket" className={style.link}>
                  Basket
                </Link>
              </li>
              <li className={style.list}>
                <Link to="/wishlist" className={style.link}>
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.restel}>
            <p className={style.res}>Reservations</p>
            <FontAwesomeIcon icon={faPhone} className={style.icon} />
            <p className={style.phone}>652-345 3222 11</p>
          </div>
          <div className={style.menu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
