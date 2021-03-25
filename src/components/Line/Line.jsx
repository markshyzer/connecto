import React from 'react';
import './Line.css';


class Line extends React.Component{


    render(){
        return(
            <div key={'line'+this.props.id} 
            className={'line '+ this.props.status} 
            style={{top: this.props.x+'vmin', 
            left: this.props.y+'vmin', 
            width: this.props.lineLength(this.props.start, this.props.end)+'vmin', 
            transform: "rotate("+this.props.degrees(this.props.start,this.props.end)+"deg)",}}
            >
            </div>
        )
    }
}

export default Line;