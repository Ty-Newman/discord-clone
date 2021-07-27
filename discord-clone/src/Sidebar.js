import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Avatar } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">

            <div class="sidebar__top">
                <h3>The Dao</h3>
                <ExpandMoreIcon />
            </div>

            <div class="sidebar__channels">
                <div class="sidebar__channelsHeader">
                    <div class="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>
                <div class="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div class="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize='large'
                />

                <div class="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div class="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div class="sidebar__profile">
                <Avatar />
                <div class="sidebar__profileInfo">
                    <h3>@novlenewman</h3>
                    <p>#thisIsMyID</p>
                </div>

                <div class="sidebar__profileIcons">
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar
