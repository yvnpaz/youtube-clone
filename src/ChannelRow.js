import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChannelRow.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
                alt={channel}
                src={image}
            />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedUserIcon />}</h4>
                <p>{subs} subscribers * {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
