import React from 'react'

function Player(props) {
    return (
        <div className="player">
                <div className="player-info">
                    <span className="player-name-span">{props.player.playerName}</span>
                    <div className="player-img-wrapper">
                        <img className="player-img" src={(props.player.playerImg || "./imgs/5-curry.jpg")}/>  
                    </div>
                </div>           
        </div>
    )
}

export default Player