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
                timestamp="59 seconds ago"
                title="Let's see the mandalorian"
                image="https://images.firstpost.com/wp-content/uploads/2020/03/The-Mandalorian-review-380.jpg?impolicy=website&width=1200&height=800"
            />
             <VideoRow
                views="4M"
                subs="501K"
                description="Do you want know how will end this gorgeous serie!!"
                channel="TvTwitch_ES"
                timestamp="4 hours ago"
                title="Let's see the mandalorian"
                image="https://fee.org/media/36253/mandalorian-wideshot.jpg?center=0.257396449704142,0.52333333333333332&mode=crop&height=656&widthratio=2.1341463414634146341463414634&rnd=132212239230000000"
            />
        </div>
    )
}

export default SearchPage;
