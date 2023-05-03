import React, { Component } from "react";
import NavBarStyles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Comp_Icon from "../../assets/logo/logo-white.png";

class NavBar extends Component {
  state = {
    menuActive: false,
  };

  handleMenuClick = () => {
    this.setState({
      menuActive: (this.menuActive = !this.menuActive),
    });
  };

  render() {
    return (
      <header>
        <h2 className={NavBarStyles.logo}>
          <img src={Comp_Icon} alt="Logo" />
        </h2>
        <input
          type="checkbox"
          id="navToggle"
          className={NavBarStyles.navToggle}
          onClick={this.handleMenuClick}
        />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/home"
                className="btn-flat "
                activeStyle={{ color: "orange", fontWeight: "bold" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/getdata"
                className="btn-flat nav_link"
                activeStyle={{ color: "orange", fontWeight: "bold" }}
              >
                Get Data
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/postskillsdata"
                className="btn-flat nav_link"
                activeStyle={{ color: "orange", fontWeight: "bold" }}
              >
                Save Data
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/deleteskillsdata"
                className="btn-flat nav_link"
                activeStyle={{ color: "orange", fontWeight: "bold" }}
              >
                Delete Data
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <label htmlFor="navToggle" className={`${NavBarStyles.navToggleLabel} ${(this.state.menuActive ? "active" : "")}`}> */}
        <label
          htmlFor="navToggle"
          className={`${NavBarStyles.navToggleLabel} ${
            this.state.menuActive ? "active" : ""
          }`}
        >
          <span></span>
        </label>
      </header>
    );
  }
}

export default NavBar;
