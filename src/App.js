import logo from './logo.svg';
import './App.css';
import Puzzle from './components/Puzzle/Puzzle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import MenuPage from './components/MenuPage/MenuPage';
import React from 'react';
import galaxy from './PuzzleFiles/galaxy';
import garden from './PuzzleFiles/garden';
import beach from './PuzzleFiles/beach';
const cloneDeep = require('clone-deep');


class App extends React.Component{
  constructor(){
      super();
      this.state = {
        beachTrophy: false,
        gardenTrophy: true,
        galaxyTrophy: false,
        menu: false,
        menuPage: 0,
        win: false, 
        puzzle: beach,
        puzzleName: 'beach',
        clear: false,
      };
  
  }

  setPuzzle = (e) => {
    e.stopPropagation()       
    console.log('Puzzle update triggered', e.target.id)
    let puzzles = [beach, garden, galaxy]
    let puzzleNames = ['beach', 'garden', 'galaxy']
    this.setState({puzzle: {...puzzles[e.target.id]}, puzzleName: puzzleNames[e.target.id]}, () => console.log(this.state.puzzleName))  
    // {...puzzles[e.target.id]}
    this.showMenu()
    this.setState({menuPage : 0})
  }

  restart = () => {
    console.log('clear clicked')
    // let c = !this.state.clear
    this.setState({clear: !this.state.clear}, () => console.log(this.state.clear))
    this.showMenu()
  }

  displayMenu = () => {
    if (this.state.menu === false){
      return
    } else {
      return <Menu selectMenu={this.selectMenu} setPuzzle={this.setPuzzle} restart={this.restart}></Menu>
    }
  }

  displayMenuPage = () => {
    if (this.state.menuPage === 0) {
      return
    } else {
      return (<MenuPage content={this.state.menuPage} selectMenu={this.selectMenu} setPuzzle={this.setPuzzle}
        beachTrophy={this.state.beachtrophy}
        gardenTrophy={this.state.gardenTrophy}
        galaxyTrophy={this.state.galaxyTrophy}
        ></MenuPage>)
    }
  }

  selectMenu = (e) => {
    e.stopPropagation()
    console.log('clickety! selectMenu', e.target.id)
    this.setState({menuPage: parseInt(e.target.id)})

  }

  showMenu = () => {
    // let newMenu = !this.stat
    this.setState({menu: !this.state.menu, menuPage: 0 }, console.log(this.state.menu))
  }
  
  
      render(){
          return(
            <div>
              <Header
              showMenu={this.showMenu}
              ></Header>
              {/* <Menu></Menu> */}
              {this.displayMenu()}
              {this.displayMenuPage()}


              {/* <MenuPage></MenuPage> */}
              <div className="puzzleBox">
                <Puzzle puzzle={this.state.puzzle} restart={this.restart} clear={this.state.clear}></Puzzle>
              </div>
              <Footer></Footer>
            </div>
  
          )
      }
  }
  
  export default App;

