import React from "react";
import profilePic from "./../../assets/profile.JPG";
import "./UserProfile.css";

const UserProfile = () => {
    return (
        <div className="app-card">
            <img src={profilePic} className="App-logo shadow" alt="logo" />
            <h2>Arunkumar N</h2>
            <h3>Frontend developer</h3>
        </div>
    );
}
export default UserProfile;