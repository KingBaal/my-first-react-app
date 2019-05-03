import React from 'react'

function Player(props) {
    return (
        <div className="player main">
                <div className="player-info info">
                    <div className="player-name">
                        <span className="span-name">{props.player.playerName}</span>
                    </div>
                    <div className="player-img-wrapper img-wrapper">
                        <img 
                            className="player-img img" 
                            alt="player"
                            src={(props.player.playerImg || "./imgs/5-curry.jpg")}
                        />  
                    </div>
                </div>           
        </div>
    )
}

export default Player