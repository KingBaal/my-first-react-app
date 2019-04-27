import React, {Component} from 'react'
import Player from './Player'
import ExpandBtn from './ExpandBtn'

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpened: false,
        };
        this.onBtnClick = this.onBtnClick.bind(this);
    }
      
    onBtnClick() {
        this.setState(oldState => ({ isOpened: !oldState.isOpened }));
    }

    render() {
        const {isOpened} = this.state

        return (
            <div className="team">
                <div className="team-info">
                    <ExpandBtn onBtnClick={this.onBtnClick} isOpened={isOpened}/>
                    <span className="team-name-span">{this.props.team.teamName}</span>
                    <div className="team-img-wrapper">
                        <img className="team-img" src={(this.props.team.teamImg || "./imgs/defoult-team.jpg")}/>  
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