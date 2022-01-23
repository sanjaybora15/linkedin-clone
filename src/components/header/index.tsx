import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import "./style.scss";

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
            <li className="nav-item active">
              <span className="nav-icon"><HomeOutlinedIcon /></span>
              <span>Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><PeopleAltOutlinedIcon/></span>
              <span>Network</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><ChatBubbleOutlineOutlinedIcon/></span>
              <span>Messaging</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><NotificationsNoneOutlinedIcon/></span>
              <span className="notification-circle"></span>
              <span>Notifications</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><WorkOutlineOutlinedIcon/></span>
              <span>Jobs</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon"><AppsOutlinedIcon/></span>
              <span>Work</span>
            </li>
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