import React from "react";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import AppBar from "./AppBar/AppBar";
import Messenger from "./Messenger/Messenger";
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  width:'100%',
  height: '100vh',
  display: 'flex'
});

const Dashboard = () => {
  return <Wrapper>
    <SideBar />
    <FriendsSideBar />
    <Messenger />
    <AppBar />
  </Wrapper>;
};

export default Dashboard;
