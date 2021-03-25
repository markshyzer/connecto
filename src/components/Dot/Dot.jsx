import React from 'react';
import './Dot.css';


class Dot extends React.Component{

    render(){
        return(
            <div className={'dot '+this.props.selected+ ' ' + this.props.valid} 
            onClick={() => this.props.clickDot(this.props.dotIndex)}
            style = {{top: this.props.x+"vmin", left: this.props.y+'vmin'}}
            >
            </div>

        )
    }
}

export default Dot;
