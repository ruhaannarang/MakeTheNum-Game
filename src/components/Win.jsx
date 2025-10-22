import React from 'react'

const Win = () => {
  return (
    <div className="body">
      <div className='firstpage'>
        <div className="playpage">
          <h1 className='wonTxt'>YOU WON!!!</h1>
        </div>
        <div >
          <a className="retry" href="/play">Retry</a>
        </div>
      </div>
    </div>
  )
}

export default Win
