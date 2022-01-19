import React from 'react'
import Tweets from '../Tweets/Tweets'
import './Mainmenu.css'
import { Avatar, Button, IconButton } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifBoxOutlinedIcon from '@material-ui/icons/GifOutlined';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
function Mainmenu() {
    return (
        <div className='mainmenu__container'>
            <div className="whatshappening__container">
                <div className="mainmenu_Home__container">
                    <h3>Home</h3>
                    <IconButton>

                    </IconButton>
                </div>
                <div className="mainmenu_Home__avatar">
                    <Avatar />
                    <form>
                        <input type="text" placeholder='Whats happening?' />
                    </form>
                </div>
                <div className="tweet__attachments">
                    <Button>
                        <PublicOutlinedIcon />
                        <h6>Everyone can reply</h6>
                    </Button>
                    <hr className='hr' />
                    <div className="tweet_icons">
                        <IconButton>
                            <ImageOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <GifBoxOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <AssessmentIcon />
                        </IconButton>
                        <IconButton>
                            <SentimentSatisfiedAltIcon />
                        </IconButton>
                        <IconButton>
                            <DateRangeIcon />
                        </IconButton>
                        <IconButton>
                            <LocationOnOutlinedIcon />
                        </IconButton>
                        <div className="tweet_button">
                            <Button>Tweet</Button>
                        </div>
                    </div>
                </div>

            </div>
            <Tweets />
            <Tweets />
            <Tweets />
            <Tweets />
        </div>
    )
}

export default Mainmenu
