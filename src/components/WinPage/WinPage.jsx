import React from 'react';
import './WinPage.css';
import Trophy from '../Trophy/Trophy'
import close from '../../Icons_Close.png'
// import rightArrow from '../../Arrow_Right.png';



class WinPage extends React.Component{
constructor(){
    super();
}

    render(){
        return(
            <div className='winPage' onClick={this.props.hideWin}>
                <div className='container'>
                    <img className='close' src={close} />
                    <h1 style={{color: 'var(--reddish)', textAlign: 'center'}}>Contragulations!</h1>
                    <Trophy trophy={true}></Trophy>
                    <h1 style={{color: 'var(--reddish)'}}>You have successfully completed the puzzle</h1>
                </div>
            </div>

        )
    }
}

export default WinPage;