import React from 'react';
import './Dot.css';


class Dot extends React.Component{



    render(){
        return(
            <div className={'dot '+this.props.selected+ ' ' + this.props.valid} 
            onClick={() => this.props.clickDot(this.props.dotIndex)}
            style = {{top: this.props.x+"vmin", left: this.props.y+'vmin'}}
            >
                {/* {this.props.dotIndex} x, {Math.round(this.props.x)} y, {Math.round(this.props.y)}, {this.props.selected} */}
            </div>

        )
    }
}

export default Dot;
