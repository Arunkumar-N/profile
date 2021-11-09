import React from "react";
import profilePic from "./../../assets/profile-2.png";
import "./UserProfile.css";

const UserProfile = () => {
    return (
        <div className="app-card flex-display">
            <div className="flex-left-item center">
                <img src={profilePic} className="App-logo" alt="logo" />
            </div>
            <div className="flex-right-item">
                <h2 className="highlight fs-22 mt-8 mb-0">Arunkumar N</h2>
                <h3 className="highlight-grey fs-18 mt-8 mb-0">Frontend developer</h3>
                <p className="description">
                    Energetic Software Engineer with 5 years’ experience developing code for high-volume businesses. Have Good
                    experience on UI/UX development with angular and backend development with Java. Involved in developing a
                    single platform website for all applications, team, management and clients to track the system process, job
                    status and users with real time analytics. Awarded Best full stack developer for Q2 in 2018 for innovative work
                    done on analytics tool.
                </p>
            </div>
        </div>

    );
}
export default UserProfile;