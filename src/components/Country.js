import React, {Component} from 'react'
import Team from './Team'
import ExpandBtn from './ExpandBtn'

class Country extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
    }
    
    onBtnClick = () => {
        this.setState(oldState => ({ isOpened: !oldState.isOpened }));
    }

    render() {
        const { isOpened } = this.state;
        return (
            <div className="country main">
                    <div className="country-info info">
                        <div className="country-name name">
                            <ExpandBtn onBtnClick={this.onBtnClick} isOpened={isOpened}/>
                            <span className="span-name">{this.props.country.countryName}</span>
                        </div>
                        <div className="country-img-wrapper img-wrapper">
                            <img 
                                className="country-img img"  
                                alt="county" 
                                src={(this.props.country.countryImg || "./imgs/grey.png")}
                            />
                        </div>
                    </div>
                    {isOpened && 
                        (<div className="teams">
                        {this.props.country.countryTeams.map((team, i) => <Team key={`team-${i}`} team={team}/>)}
                    </div>)}
        </div>  
        );
    }
}

export default Country