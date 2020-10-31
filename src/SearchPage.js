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
            <VideoRow />
        </div>
    )
}

export default SearchPage;
