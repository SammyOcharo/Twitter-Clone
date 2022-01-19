import { Avatar, IconButton } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import React from 'react'
import './Tweet.css'

function Tweets() {
    return (
        <div className='tweet__container'>
            <div className="container_per_tweet">
                <div className="tweet_avatar">
                    <Avatar />
                </div>
                <div className="tweet_contents">
                    <div className="profile_details">
                        <h4>Tweep naame</h4>
                        <h5>@tweep handle</h5>
                        <h6>08.00</h6>
                    </div>
                    <div className="tweet_paragraph">
                        <p>This is a tweet</p>
                    </div>
                    <div className="tweep_icons">
                        <IconButton>
                            <ChatBubbleOutlineOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <CachedOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <ShareOutlinedIcon />
                        </IconButton>

                    </div>
                </div>
                <div className="tweep__dots">
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Tweets
