import React from "react";
import "./style.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface Props {
    name: string;
    desc: string;
    profileImg: string;
    id: string;
}

const ShortProfileCard = (props: Props) => {
    return(
        <div className="short-profile-card">
            <img src={props.profileImg} alt="profile-img"/>
            <div className="name-and-desc">
                <h1>{props.name.slice(0,14)}</h1>
                <p>{props.desc}</p>
            </div>
            <div className="add-section">
                <span className="add-icon">
                    <AddOutlinedIcon/>
                </span>
            </div>
        </div>
    )
}



export default ShortProfileCard;
