import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="Become a developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="https://i.ytimg.com/vi/hZDaS9xyINI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7V6CB1kWEJ13aT-tzSCASF4vzgQ"
                    channel="Yvn"
                    image="https://i.ytimg.com/an_webp/Sh9ZGIYkpf8/mqdefault_6s.webp?du=3000&sqp=CJKu1vwF&rs=AOn4CLAEbvAVKLYPpnE0-qqeqT6y8tJ1nw"
                />
                <VideoCard
                    title="Become a developer in 10 minutes | 2019/2020"
                    views="100mil views"
                    timestamp="1 year ago"
                    channelImage="https://i.ytimg.com/vi/hZDaS9xyINI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7V6CB1kWEJ13aT-tzSCASF4vzgQ"
                    channel="xyz"
                    image="https://avatars3.githubusercontent.com/u/15194775?s=400&v=4"
                />
                <VideoCard
                    title="Become a developer in 10 minutes | 2019/2020"
                    views="1.1M views"
                    timestamp="2 days ago"
                    channelImage="https://i.ytimg.com/vi/hZDaS9xyINI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7V6CB1kWEJ13aT-tzSCASF4vzgQ"
                    channel="wwww lop"
                    image="https://avatars2.githubusercontent.com/u/1645051?s=200&v=4"
                 />
                <VideoCard 
                    title="Become a developer in 10 minutes | 2019/2020"
                    views="1.1M views"
                    timestamp="2 days ago"
                    channelImage="https://i.ytimg.com/vi/hZDaS9xyINI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA7V6CB1kWEJ13aT-tzSCASF4vzgQ"
                    channel="wwww lop"
                    image="https://avatars0.githubusercontent.com/u/19211038?s=200&v=4"
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}

export default RecommendedVideos;