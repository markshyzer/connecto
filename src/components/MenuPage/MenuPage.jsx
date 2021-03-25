import React from 'react';
import './MenuPage.css';
// import rightArrow from '../../Arrow_Right.png';
import leftArrow from '../../Arrow_Left.png';
// import MenuContent from '../../MenuContent/MenuContent';
import Trophy from '../Trophy/Trophy';
import example from '../../Icons_Examples.png';
import beachIcon from '../../Icons_Beach_Puzzle_small.png';
import gardenIcon from '../../Icons_Garden_Puzzle_small.png';
import galaxyIcon from '../../Icons_Galaxy_Puzzle_small.png';

class MenuPage extends React.Component{

content = () => {
    if (this.props.content == 1) {
        return (
            <div className='puzzleMenu'>
                <div className='menuPageItem' id='0' onClick={this.props.selectMenu}><img className='menuPageIcon' src={leftArrow} /><p id='0'>CHOOSE PUZZLE</p></div>

                <div className='puzzleMenuItem' id='0' onClick={this.props.setPuzzle}><p>BEACH</p><img className='puzzIcon' src={beachIcon} /></div>
                <div className='puzzleMenuItem' id='1' onClick={this.props.setPuzzle}><p>GARDEN</p><img className='puzzIcon' src={gardenIcon} /></div>
                <div className='puzzleMenuItem' id='2' onClick={this.props.setPuzzle}><p>GALAXY</p><img className='puzzIcon' src={galaxyIcon} /></div>
            </div>
        )
    } else if (this.props.content == 2){
        return (
            <div>
                <div className='menuPageItem' id='0' onClick={this.props.selectMenu}><img className='menuPageIcon' src={leftArrow} /><p id='0'>TROPHY ROOM</p></div>

                <Trophy trophy={this.props.beachTrophy}></Trophy>
                <Trophy trophy={this.props.gardenTrophy}></Trophy>
                <Trophy trophy={this.props.galaxyTrophy}></Trophy>
            </div>
        )
    } else if (this.props.content == 3){
        return (
            <div>
                <div className='menuPageItem' id='0' onClick={this.props.selectMenu}><img className='menuPageIcon' src={leftArrow} /><p id='0'>INSTRUCTIONS</p></div>

                <p className='instructions'>Connect all the dots in the puzzle to win! Start anywhere, then move to any dot connected by a line. You can't visit a dot or use a line twice.</p>
                <img className="sample" src={example} />
                <p className='instructions' style={{marginTop: '30px'}}>Earn a trophy for every puzzle you complete. Check them out in your trophy room!</p>
            </div>
        )
    }
}

    render(){
        return(
            <div className='menuPage'>
                
                {this.content()}
                {/* <MenuContent setPuzzle={this.props.setPuzzle} 
                        content={this.props.content}
                        beachTrophy={this.props.beachtrophy}
                        gardenTrophy={this.props.gardenTrophy}
                        galaxyTrophy={this.props.galaxyTrophy}
                ></MenuContent> */}
            </div>

        )
    }
}

export default MenuPage;