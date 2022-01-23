import React from "react"
import ContentLoader from "react-content-loader"
import "./style.scss";

const FeedLoader = (props) => {
  return (
    <div className="loader-container">
      <ContentLoader 
          speed={2}
          width={1000}
          height={460}
          viewBox="0 0 1000 460"
          backgroundColor="#e3e3e3"
          foregroundColor="#f2f2f2"
          {...props}
        >
          <circle cx="24" cy="28" r="23" /> 
          <rect x="58" y="7" rx="2" ry="2" width="171" height="18" /> 
          <rect x="58" y="30" rx="2" ry="2" width="171" height="16" /> 
          <rect x="0" y="59" rx="2" ry="2" width="1000" height="402" />
        </ContentLoader>
    </div>
  )
}

export default FeedLoader

