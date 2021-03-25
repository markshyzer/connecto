import React from 'react';
import Dot from '../Dot/Dot'
import Line from '../Line/Line'
import './Puzzle.css';
import beach from '../../PuzzleFiles/beach';



class Puzzle extends React.Component{
    constructor() {
        super();
        this.state = { 
            move: [],
            score: 0,
            puzzle : beach,
        };
    }

    componentDidMount() {
        this.init()
    }

    init = () => {
        let newDot = [...this.props.puzzle.dot]
        let newLine = [...this.props.puzzle.line]
        newLine.forEach(function (l){
            l[2]='unslected'
        })
        newDot.forEach(function (d){
            d.valid=true
            d.selected=false
        });
        this.setState({puzzle: {...this.props.puzzle, dot: newDot, line: newLine}, score: 0, move: []}, ()=>{})
        document.documentElement.style.setProperty('--line', 'rgb(50, 28, 39)')
        document.documentElement.style.setProperty('--dot', 'rgb(50, 28, 39)')
        document.documentElement.style.setProperty('--usedDot', this.props.puzzle.dotColour)
        document.documentElement.style.setProperty('--usedLine', this.props.puzzle.lineColour)
        document.documentElement.style.setProperty('--background', this.props.puzzle.bgColour)
    }

    componentDidUpdate() {
        if (this.props.puzzle.name !== this.state.puzzle.name){
            this.init()
        }
        if (this.props.clear === true){
            this.init()
            this.props.restart()
        }
    }

    changePuzzle = () => {
        this.setState({puzzle: this.props.puzzle}, this.init())
    }

    clickDot = (dotIndex) => {
        if (this.state.puzzle.dot[dotIndex].valid){
            let newDot = [...this.state.puzzle.dot]
            newDot[dotIndex].selected = !(newDot[dotIndex].selected)
            let newMove = [...this.state.move]
            newMove.push(dotIndex)
            this.setState({puzzle: {...this.state.puzzle, dot: newDot}})
            this.setState({move: [...newMove]}, () => this.checkLegal())
            this.setState({score: this.state.score+1}, this.props.checkWin(this.state.score, this.props.puzzle.dot.length-1))
        }

    }

    blockPath = () => {
        let newLine = [...this.state.puzzle.line]
        let prevDot = this.state.move[0]
        this.state.move.forEach(function (m,i){
            if (i > 0){
                newLine.forEach(function (line, index){
                    if(line.includes(m) && line.includes(prevDot)){
                        newLine[index].splice(2, 1, 'used')
                    }
                })
            }
            prevDot = m
        })
        this.setState({puzzle: {...this.state.puzzle, line: [...newLine]}})
    }

    checkLegal = () => {
        let current = this.state.move[this.state.move.length-1]
        console.log('current move', current)

        let newLine = [...this.state.puzzle.line]
        newLine.forEach((line, index) => {
            if (line.includes(current) && !(this.state.puzzle.dot[line[0]].selected && this.state.puzzle.dot[line[1]].selected)) {
                line[2]='legal'
            } else {
                line[2]='unselected'
            }
        })

        let newDot = [...this.state.puzzle.dot]
        newDot.forEach((d) => {
            d.valid=false
        })
        newLine.forEach(function (line, index){
            if (line.includes('legal')) {
                newDot[line[0]].valid=true
                newDot[line[1]].valid=true
            }
        newDot.forEach((d) => {
                if (d.selected === true) {
                    d.valid=false
                }
            })
        })
        this.setState({puzzle: {...this.state.puzzle, line: [...newLine], dot: [...newDot]}}, () => this.blockPath())
    }

    lineLength = (pointOne, pointTwo) => {
        let a = Math.abs(this.state.puzzle.dot[pointOne].x - this.state.puzzle.dot[pointTwo].x)
        let b = Math.abs(this.state.puzzle.dot[pointOne].y - this.state.puzzle.dot[pointTwo].y)
        return Math.sqrt((a*a)+(b*b))
    }

    degrees = (pointOne, pointTwo) => {
        let adjacent = Math.abs(this.state.puzzle.dot[pointOne].y - this.state.puzzle.dot[pointTwo].y)
        let hypotenuse = this.lineLength(pointOne, pointTwo)
        if(this.state.puzzle.dot[pointOne].x < this.state.puzzle.dot[pointTwo].x) {
            return Math.acos(adjacent/hypotenuse)*180/Math.PI
        } else {
            return Math.acos(adjacent/hypotenuse)*-180/Math.PI
        }
    }

    render(){
        return(
            <div>
                <div className='puzzleBoxContainer'>
                <div className='puzzleBox'>
                {this.state.puzzle.dot.map((d, i) => 

                <Dot
                    x={d.x}
                    y={d.y}
                    selected={d.selected ? 'selected' : 'unselected'}
                    dotIndex={i}
                    key={i}
                    clickDot={this.clickDot}
                    valid={d.valid ? 'valid' : 'invalid'}
                    dotColour={this.state.puzzle.dotColour}>
                    
                </Dot>
                )}
                {this.state.puzzle.line.map((l,i) =>
                <Line 
                x={this.state.puzzle.dot[l[0]].x}
                y={this.state.puzzle.dot[l[0]].y}
                lineLength={this.lineLength}
                start={l[0]}
                end={l[1]}
                degrees={this.degrees}
                status={l[2]}
                key={'line'+i+l[2]}
                lineColour ={this.state.puzzle.lineColour}
                ></Line>
                )}

                </div>
                </div>
            </div>
        )
    }
}

export default Puzzle;
