import React from "react";
import "./style.scss";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SendIcon from '@mui/icons-material/Send';

const WriteFeed = () => {
    return(
        <div className="theme-write-feed">
            <form className="theme-input-form">
                <input
                    type="text"
                    value=""
                    onChange={(e) => null}
                    className="theme-input-field"
                    placeholder="Write here. Add images or a video visual impact."
                />
                <div className="input-type-container">
                    <div className="article">
                        <ArticleOutlinedIcon/>
                        <span>Article</span>
                    </div>
                    <div className="image">
                        <PhotoCameraOutlinedIcon/>
                        <span>Image</span>
                        
                    </div>
                    <div className="video">
                        <VideocamOutlinedIcon/>
                        <span>Video</span>
                    </div>
                    <button type="submit" className="submit">
                        <SendIcon/>
                    </button>
                </div>
          </form>
        </div>
    )
}

export default WriteFeed;
