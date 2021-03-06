import React, {useState} from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import { useEffect } from 'react';
import db from './firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [Rooms, setRooms] = useState([]);
    const [{user},dispatch] = useStateValue();
    useEffect(()=>{
        db.collection('Rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                })
                ))
        ))
    }, [])

    return (
        <div className = "sidebar">
            <div className="sidebar__header">
                <IconButton>
                <Avatar src={user?.photoURL}/>
                </IconButton>
                <div className="sidebar__headerRight">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" id="" placeholder ="Serach or start a new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {Rooms.map(room =>(
                    <SidebarChat key = {room.id} id= {room.id}
                    name = {room.data.name} />
                ))}
                
            </div>
        </div>
    )
}

export default Sidebar
