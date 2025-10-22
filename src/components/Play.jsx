import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply, divide, reset } from '../redux/counter/counterSlice'
const getRandomNum = () => {
  const a = Math.ceil(Math.random() * 1000)
  console.log(a)
  return a
}
getRandomNum()
const Play = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const randomNum = React.useMemo(() => getRandomNum(), []);
  {

    return (
      <div className='playpage'>
        <div className="firstpage">
          <div className="siteName">Improve Your calculation</div>
          <div className="randomNum">
            <span>Your Random Number is </span>
            <span id='randomNum'>{randomNum}</span>

          </div>
          <div className="yourNum">{count}</div>

          <span className='options'>
            <button className='opt' onClick={() => dispatch(increment())}>+1</button>
            <button className='opt' onClick={() => dispatch(decrement())}>-1</button>
            <button className='opt' onClick={() => dispatch(multiply())}>×2</button>
            <button className='opt' onClick={() => dispatch(divide())}>÷2</button>
          </span>
          <button className='resetbtn' onClick={() => dispatch(reset())}>Reset</button>
          <a className='winbtn' href="/won">Next</a>
      </div>
      </div >
    )
  }
}
export default Play