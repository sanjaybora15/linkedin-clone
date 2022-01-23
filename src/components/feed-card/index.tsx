import React from "react";
import "./style.scss";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

interface Props {
    name: string;
    desc: string;
    profileImg: string;
    id: string;
    feedComment: string;
    feedImage: string;
    totalLikes: number;
    totalComment: number;
    onShareClick: () => void;
    updatedTime: string;
}

const FeedCard = (props: Props) => {
    return(
        <div className="theme-feed-card">
            <div className="feed-top-section">
                <img src={props.profileImg} alt="profile-img"/>
                <div className="name-and-desc">
                    <h1>{props.name.slice(0,14)}</h1>
                    <p>{props.desc}</p>
                </div>
                <div className="more-options">
                    <span className="icon">
                        <MoreHorizOutlinedIcon/>
                    </span>
                    <span className="text">{props.updatedTime}</span>
                </div>
            </div>
            <div className="feed-comment-section">
                <p>{props.feedComment}</p>
            </div>
            {
                props.feedImage &&
                    <div className="feed-image">
                        <img src={props.feedImage} alt="feed-image"/>
                    </div>
            }
            
            <div className="like-and-comment-section">
                <div>
                    <FavoriteBorderOutlinedIcon/>
                    <span className="comment-text">{props.totalLikes}</span>
                </div>
                <div>
                    <ChatBubbleOutlineOutlinedIcon/>
                    <span className="comment-text">{props.totalComment}</span>
                </div>
                <div onClick={() => props.onShareClick()}>
                    <ShareOutlinedIcon/>
                    <span className="comment-text">Share</span>
                </div>
                
            </div>
        </div>
    )
}

FeedCard.defaultProps = {
    profileImg: "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
}


export default FeedCard;
