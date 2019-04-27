import React, {Component} from 'react'
import Team from './Team'
import ExpandBtn from './ExpandBtn'

class Country extends Component { 
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
        const { isOpened } = this.state;
        return (
          <div className="country">
                    <div className="country-info">
                        <ExpandBtn onBtnClick={this.onBtnClick} isOpened={isOpened}/>
                        <span className="country-name-span">{this.props.country.countryName}</span>
                        <div className="country-img-wrapper">
                            <img className="country-img" src={(this.props.country.countryImg || "./imgs/grey.png")}/>
                        </div>
                    </div>
                    {isOpened && (<div className="teams">
                        {this.props.country.countryTeams.map((team, i) => <Team key={`team-${i}`} team={team}/>)}
                    </div>)}
        </div>  
        );
    }
}

export default Country