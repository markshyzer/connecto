// import React from 'react';
// import './MenuContent.css';
// // import rightArrow from '../../Arrow_Right.png';
// // import leftArrow from '../../Arrow_Left.png';
// // import beachPuzzle from '../../puzzles_Beach.svg'
// // import beachPuzzle from '../../components/puzzles_Beach.svg'
// import Trophy from '../Trophy/Trophy'


// class MenuContent extends React.Component{
// constructor(){
//     super();

// }

// content = () => {
//     if (this.props.content == 1) {
//         return (
//             <div className='puzzleMenu'>
//                 <div className='puzzleMenuItem' id='0' onClick={this.props.setPuzzle}><p>BEACH</p></div>
//                 <div className='puzzleMenuItem' id='1' onClick={this.props.setPuzzle}><p>GARDEN</p></div>
//                 <div className='puzzleMenuItem' id='2' onClick={this.props.setPuzzle}><p>GALAXY</p></div>
//             </div>
//         )
//     } else if (this.props.content == 2){
//         return (
//             <div>
//                 <Trophy trophy={this.props.beachTrophy}></Trophy>
//                 <Trophy trophy={this.props.gardenTrophy}></Trophy>
//                 <Trophy trophy={this.props.galaxyTrophy}></Trophy>
//             </div>
//         )
//     } else if (this.props.content == 3){
//         return (
//             <div>
//                 <h2>Instructions</h2>
//                 <p>Connect all the dots in the puzzle to win! Start with any dot, then move to any dot connected by a line. You can't visit a dot or use a line twice.</p>
//             </div>
//         )
//     }
// }

//     render(){
//         return(
//             this.content()
//             // {this.content}
//         )
//     }
// }

// export default MenuContent;