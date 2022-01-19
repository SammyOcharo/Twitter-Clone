import React from 'react';
import './Trendsmenu.css'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Button, IconButton } from '@material-ui/core';
function Trendsmenu() {
    return (
        <div className='trendsmenu__container'>
            <div className="trendsmenu__search_container">
                <SearchOutlinedIcon />
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="trendsmenu__trend__container">
                <div className="trendsmenu__trends__header">
                    <h2>Kenya Trends</h2>
                    <SettingsOutlinedIcon />
                </div>
                <div className="trendsmenu__content">
                    <Button>
                        <div className="trends__content_container">
                            <div className="tag__container">
                                <h4 className='tag__number'>1. Trending</h4>
                                <h4 className='tag'>#Uhuru</h4>
                                <h5>13k Tweets</h5>

                            </div>
                            <div className="dots">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="trends__content_container">
                            <div className="tag__container">
                                <h4 className='tag__number'>2. Trending</h4>
                                <h4 className='tag'>#Uhuru</h4>
                                <h5>13k Tweets</h5>

                            </div>
                            <div className="dots">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="trends__content_container">
                            <div className="tag__container">
                                <h4 className='tag__number'>3. Trending</h4>
                                <h4 className='tag'>#Uhuru</h4>
                                <h5>13k Tweets</h5>

                            </div>
                            <div className="dots">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="trends__content_container">
                            <div className="tag__container">
                                <h4 className='tag__number'>4. Trending</h4>
                                <h4 className='tag'>#Uhuru</h4>
                                <h5>13k Tweets</h5>

                            </div>
                            <div className="dots">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="trends__content_container">
                            <div className="tag__container">
                                <h4 className='tag__number'>5. Trending</h4>
                                <h4 className='tag'>#Uhuru</h4>
                                <h5>13k Tweets</h5>

                            </div>
                            <div className="dots">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Trendsmenu
