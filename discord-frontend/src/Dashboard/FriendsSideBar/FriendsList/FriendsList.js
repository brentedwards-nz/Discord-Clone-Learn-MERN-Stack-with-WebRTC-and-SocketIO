import React from 'react';
import { styled } from '@mui/system'
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIENDS = [
    {
        id: 1,
        userName: 'Brent',
        isOnline: true
    },
    {
        id: 2,
        userName: 'Bob',
        isOnline: false
    },
    {
        id: 3,
        userName: 'Burt',
        isOnline: false
    }
];

const MainContainer = styled("div")({
    width: "100%",
    height: "22%",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto"
});

const FriendsList = () => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map(f => (
                <FriendsListItem
                    username={f.userName}
                    id={f.id}
                    key={f.id}
                    isOnline={f.isOnline}
                />
            ))};
        </MainContainer>

    );
};

export default FriendsList;