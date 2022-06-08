import React from 'react'
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./Friends.css";

function Friends() {
    return (
 <div class="title">
    <h1>Friends</h1>
    <div className="leftbarTitle">
        <ul className="leftbarFriendlist">
            <li className="leftbarFriend">
                <div className="leftbarImgContainer">
                    <img 
                    className="leftbarProfilePic" 
                    src="/profile_pics/img1.png" 
                    alt="img.png"
                    />
                    <span className="leftbarOnline"></span>
                </div>
                <span className="leftbarUsername"> Jennifer Jin</span>
            </li>
            <li className="leftbarFriend">
                <div className="leftbarImgContainer">
                    <img 
                    className="leftbarProfilePic" 
                    src="/profile_pics/img2.png" 
                    alt="img.png"
                    />
                    <span className="leftbarOnline"></span>
                </div>
                <span className="leftbarUsername"> Jennifer Jin</span>
            </li>
            <li className="leftbarFriend">
                <div className="leftbarImgContainer">
                    <img 
                    className="leftbarProfilePic" 
                    src="/profile_pics/img3.png" 
                    alt="img.png"
                    />
                    <span className="leftbarOnline"></span>
                </div>
                <span className="leftbarUsername"> Jennifer Jin</span>
            </li>
            <li className="leftbarFriend">
                <div className="leftbarImgContainer">
                    <img 
                    className="leftbarProfilePic" 
                    src="/profile_pics/img4.png" 
                    alt="img.png"
                    />
                    <span className="leftbarOnline"></span>
                </div>
                <span className="leftbarUsername"> Jennifer Jin</span>
            </li>
            <li className="leftbarFriend">
                <div className="leftbarImgContainer">
                    <img 
                    className="leftbarProfilePic" 
                    src="/profile_pics/img1.png" 
                    alt="img.png"
                    />
                    <span className="leftbarOnline"></span>
                </div>
                <span className="leftbarUsername"> Jennifer Jin</span>
            </li>
            <li className="leftbarFriend">
                <div className="leftbarImgContainer">
                    <img 
                    className="leftbarProfilePic" 
                    src="/profile_pics/img3.png" 
                    alt="img.png"
                    />
                    <span className="leftbarOnline"></span>
                </div>
                <span className="leftbarUsername"> Jennifer Jin</span>
            </li>
        </ul>


    </div>


 </div>




    );
}

export default Friends