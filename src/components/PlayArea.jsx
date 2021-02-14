import React from 'react'

const PlayArea = () => {
  return (
    <div>
      <div className='players'>
        <div className='player'>
          <h2>Player 1</h2>
          <img src='../../images/dice1.png' />
        </div>
        <div className='player'>
          <h2>Player 2</h2>
          <img src='../../images/dice2.png' />
        </div>
      </div>
    </div>
  )
}

export default PlayArea
