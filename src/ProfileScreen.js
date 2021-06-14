import React from 'react';
import { useSelector } from 'react-redux';
import {selectUser} from "../features/userSlice";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import PlansScreen from './PlansScreen';

function ProfileScreens() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
                    alt="" 
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plan: Premium)</h3>
                            <h5>Renewal Date: 14/06/2022</h5>
                            
                            <PlansScreen />
                            <button onClick={() => auth.signOut()}
                            className="profileScreen__signOut">Sign Out</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreens
