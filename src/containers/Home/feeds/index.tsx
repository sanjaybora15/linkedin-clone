import React, {useEffect, useState, useRef} from "react";
import FeedCard from "../../../components/feed-card";
import "./style.scss";
import WriteFeed from './writeFeed';
import axios from "axios";
import { dateToString } from "../../../utils";
import FeedLoader from "../../../components/feed-loader";
import ScrollTOTopButton from "../../../components/scroll-to-top-button";

const TOTAL_PAGES = 3;

const Feeds = () => {
    const [feedsData, setFeedsData] = useState<any[]>([])
    const [loading, setLoading] = useState(true);
	const [pageNum, setPageNum] = useState(1);
	const [lastElement, setLastElement] = useState(null);

    const observer = useRef(
        new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                setPageNum((no) => no + 1);
            }
        })
	);
    const fetchData = async () => {
        try {
            setLoading(true);
            const feedsData = await axios.get(`https://api.unsplash.com/photos?page=${pageNum}&&client_id=4b93d1ba487be4e97a48a5872cfa8809e43a1c00a958f3d2da777e25f5aab6a2`);
            setFeedsData((prev) => {
                return [
                    ...prev,
                    ...feedsData.data
                ]
            })
        } catch (error) {}
        setLoading(false);
    }
    useEffect(() => {
		if (pageNum <= TOTAL_PAGES) {
			fetchData();
		}
	}, [pageNum]);
    useEffect(() => {
		const currentElement = lastElement;
		const currentObserver = observer.current;
		if (currentElement) {
			currentObserver.observe(currentElement);
		}
		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [lastElement]);
    return(
        <div className="theme-feeds">
           <WriteFeed/>
           <div>
               {
                   feedsData.length ? feedsData.map((feed, index) => {
                       return (
                           <div key={index}>
                               {
                                   index === feedsData.length -1 && !loading && pageNum <= TOTAL_PAGES &&
                                   <div ref={setLastElement}/>
                               }
                               <FeedCard
                                    name={feed?.user?.name || "User"}
                                    desc={dateToString(feed?.created_at, true) || ""}
                                    profileImg={feed?.user?.profile_image?.medium || "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"}
                                    id="123"
                                    feedComment={feed?.user?.bio || ""}
                                    feedImage={feed?.urls?.regular || ""}
                                    totalLikes={60}
                                    totalComment={12}
                                    onShareClick={() => null}
                                    updatedTime={"10m ago"}
                                />
                           </div>
                       )}) : null
               }
                {loading && <FeedLoader/>}
                {pageNum - 1 === TOTAL_PAGES && (
                    <div className="end-feed-section">
                        <h2>END OF FEED</h2>
                        <ScrollTOTopButton onClick={() => window.scrollTo(0,0)} label="Go top top"/>
                    </div>
                
                )}
           </div>
        </div>
    )
}

export default Feeds;
