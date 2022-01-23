import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import "./style.scss";
import { navLinks } from "./nav-links";

const Header = () => {
    return(
      <nav className="navbar navbar-expand-lg fixed-top theme-nav-container">
        <div className="brand-logo">
          <span className="icon"><LinkedInIcon fontSize="large" color="primary"/></span>
        </div>
        <button className="toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="nav-icon"><AppsOutlinedIcon/></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-search">
            <span className="search-icon"><SearchOutlinedIcon/></span>
            <input className="search-field" type="search" placeholder="Search" aria-label="Search"/>
          </form>
          <ul className="navbar-nav mr-auto theme-navbar-items">
            {
              navLinks.map((navItem, index) => {
                return(
                  <li key={index} className={`nav-item ${navItem.active ? "active" : ""}`}>
                    <span className="nav-icon">{<navItem.icon/>}</span>
                    {
                      navItem.pendingItem &&
                        <span className="notification-circle"></span>
                    }
                    <span>{navItem.title}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="top-profile">
            <div className="img-and-icon">
                <span className="icon"><ArrowDropDownCircleRoundedIcon fontSize="small"/></span>
                <img src="https://qph.fs.quoracdn.net/main-qimg-8a38a121a5ce6242e72d3bfbf276540f.webp" alt="profile-picture"/>
            </div>
        </div>
    </nav>
    )
}

export default Header;