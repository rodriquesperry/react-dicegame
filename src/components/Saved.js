else if (this.state.die2 > this.state.die1) {
      return (
        <div>
        <div className='players'>
          <div className='player'>
            <h2>{this.state.player1}</h2>
            <img src={this.state.die1} />
          </div>
          <div className='player'>
            <h2>Player 2 Wins!!</h2>
            <img src={this.state.die2} />
          </div>
        </div>
        <div className='play'>
          <Button className='btn' onClick={this.diceChange} >Roll the Dice</Button>
        </div>
      </div>

      )
    } else if (this.state.die1 === this.state.die2) {
      return (
        <div>
        <div className='players'>
          <div className='player'>
            <h2>Draw</h2>
            <img src={this.state.die1} />
          </div>
          <div className='player'>
            <h2>Draw</h2>
            <img src={this.state.die2} />
          </div>
        </div>
        <div className='play'>
          <Button className='btn' onClick={this.diceChange} >Roll the Dice</Button>
        </div>
      </div>
      )
    }