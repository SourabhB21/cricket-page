import React from "react";

export default function Player(props){
    return (
        <div className="maindiv">
            
            <img src={props.image} className="image"/>
            <h2>{props.name}</h2>
            <div className="id">
                <h4 className="j"> jersey: {props.jersey}</h4>
                <h4 className="T"> iplTeam:{props.iplTeam}</h4>
            </div>
            <div className="button-container">
                <button className="vote-btn" id="upvotebtn">like <span id="vpvoteCount">0</span></button>
                
                <button className="cmt-btn" id="comentbtn">comment<span id="cmt-count">0</span></button>
              
            </div>

        </div>
    )
}