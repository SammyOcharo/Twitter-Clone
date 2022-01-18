import React from 'react'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'
import { Avatar } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import './Sidebarmenu.css';

function Sidebarmenu() {
    return (
        <div className='sidebarmenu'>
            <div className="sidebarmenu__container">
                <Button>
                    <HomeSharpIcon />
                    <h4 className="sidebar_title">Home</h4>
                </Button>
                <Button>
                    <NotificationsNoneIcon />
                    <h4 className="sidebar_title">Notifications</h4>
                </Button>
                <Button>
                    <MailOutlineIcon />
                    <h4 className="sidebar_title">Messages</h4>
                </Button>
                <Button>
                    <BookmarkBorderIcon />
                    <h4 className="sidebar_title">Bookmarks</h4>
                </Button>
                <Button>
                    <ListAltIcon />
                    <h4 className="sidebar_title">Lists</h4>
                </Button>
                <Button>
                    <PermIdentityIcon />
                    <h4 className="sidebar_title">Profile</h4>
                </Button>
                <Button>
                    <MoreHorizIcon />
                    <h4 className="sidebar_title">More</h4>
                </Button>
            </div>
            <div className="sidebarmenu__tweet">
                <Button> <span className='sidebarmenu__tweet__text'>Tweet</span> </Button>
            </div>
            <div className="sidebarmenu__profile">
                <Button>
                    <Avatar />
                    <div className="sidebarmenu__profile_details">
                        <p className='name'>Ocharo obanyi</p>
                        <p className='handle'>@ocharo_obanyi</p>
                    </div>
                    <MoreHorizOutlinedIcon />
                </Button>

            </div>
        </div>
    )
}

export default Sidebarmenu
