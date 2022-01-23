import React from "react";
import "./style.scss";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

interface IProps {
   imageLink: string;
   name: string;
   description: string;
   onEditClick: () => void;
   connectionCount: number;
   viewsCount: number;
   profileLink: string;
}

const ProfileCard = (props: IProps) => {
    return(
        <React.Fragment>
          <div className="theme-profile-card">
              <div className="edit-section" onClick={() => props.onEditClick()}>
                  <span><BorderColorOutlinedIcon/></span>
                </div>
              <div className="profile-info">
                <img className="avatar" src={props.imageLink} alt="avatar-image" />
                <h1 className="name">{props.name}</h1>
                <p className="desc">{props.description}</p>
                <p className="link">
                    <a>
                        {props.profileLink}
                    </a>
                </p>
              </div>
              <div className="profile-count-section">
                  <div className="count-left">
                      <h1>{props.connectionCount}</h1>
                      <p>Connections</p>
                  </div>
                  <div className="count-right">
                      <h1>{props.viewsCount}</h1>
                      <p>Views</p>
                  </div>
              </div>
              <div className="upgrade-section">
                  <p>Free access exclusive tools & insights</p>
                  <button className="upgrade-button">
                    UPGRADE TO PREMIUM
                  </button>
              </div>
          </div>
        </React.Fragment>
    )
}

export default ProfileCard;
