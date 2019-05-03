import React, {Component} from 'react'
import Player from './Player'
import ExpandBtn from './ExpandBtn'

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
    }

    onBtnClick =() => {
        this.setState(oldState => ({ isOpened: !oldState.isOpened }));
    }

    render() {
        const {isOpened} = this.state
        return (
            <div className="team main">
                <div className="team-info info">
                    <div className="team-name name">
                        <ExpandBtn 
                            onBtnClick={this.onBtnClick} 
                            isOpened={isOpened}
                        />
                        <span className="span-name">{this.props.team.teamName}</span>
                    </div>
                    <div className="team-img-wrapper img-wrapper">
                        <img 
                            className="team-img img" 
                            alt="team"
                            src={(this.props.team.teamImg || "./imgs/defoult-team.jpg")}
                        />  
                    </div>
                </div>
                {isOpened && (<div className="players">
                    {this.props.team.teamPlayers.map((player, i) => <Player key={`player-${i}`} player={player}/>)}
                </div>)}
            </div>
        )
    }
}

export default Team