import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://i.insider.com/5d6400332e22af0734630c24?width=1100&format=jpeg&auto=webp"
                channel="Yvn Pro"
                verified
                subs="120K"
                noOfVideos={328}
                description="You can info awesome programming lessons here! Also, expect programming tips 
                and tricks that will take your coding skills to the ..."
            />
            <hr />
            <VideoRow
                views="1.1M"
                subs="120K"
                description="Do you want know how will end this gorgeous serie!!"
                channel="TvTwitch"
                title="Let's see the mandalorian"
                image="https://images.firstpost.com/wp-content/uploads/2020/03/The-Mandalorian-review-380.jpg?impolicy=website&width=1200&height=800"
            />
        </div>
    )
}

export default SearchPage;
