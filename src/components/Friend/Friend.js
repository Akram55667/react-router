import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id, email, phone} = props.friend;
    const navigate = useNavigate();

    const showFriendDetail = () =>{
        // const path =`/friend/${id}`;
        // navigate(path);
        navigate('/friend/'+id)
    }
   
    return (
        <div>
            <h1>Phone: <span>{phone}</span></h1>
            <h2>Name:  {name}</h2>
            <Link to="/friend/:friendId">Datlis</Link>
             <button onClick={showFriendDetail}>{username}:{id}</button>
             <h4><span>Email: </span>{email}</h4>
             
        </div>
    );
};

export default Friend;