import React from 'react'
import { Button } from 'reactstrap'

class Play extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       die1: '../../images/dice1.png',
       die2: '../../images/dice1.png',
       player1: 'Player 1',
       player2: 'Player 2',
       winner1:'Player 1 Wins!!',
       winner2: 'Player 2 Wins!!',
       draw: 'Draw!!'
    }
  }
    
  
  
  diceChange = () => {
    this.setState({
      die1: '../images/dice' + (Math.floor(Math.random() * 6) + 1 ) + '.png',
      die2: '../images/dice' + (Math.floor(Math.random() * 6) + 1 ) + '.png',
    });
  }
 
  render() {
      return (
      <div>
        <div className='players'>
          <div className='player'>
            <h2>{(this.state.die1 > this.state.die2) ? this.state.winner1 : this.state.player1}</h2>
            <img  src={this.state.die1} />
          </div>
          <div className='player'>
            <h2>{(this.state.die1 < this.state.die2) ? this.state.winner2 : this.state.player2}</h2>
            <img src={this.state.die2} />
          </div>
        </div>
        <div className='play'>
          <Button className='btn' onClick={this.diceChange} >Roll the Dice</Button>
        </div>
      </div>
      )
      
  }

}
export default Play
