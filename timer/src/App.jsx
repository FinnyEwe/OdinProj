import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [timer, setTimer] = useState(0)
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [start, setStart] = useState(false)
  const [pause, setPause] = useState(false)


  useEffect(() => {
    let interval;
    console.log(start && pause)
    if (start && pause) {
      interval = setInterval(() => {
        if (parseInt(seconds) > 0) {
          setSeconds(prevS => prevS -1)
        } else if (parseInt(minutes) > 0) {
            setMinutes(prevM => prevM -1)
            setSeconds(59)
          } else if (parseInt(hours) > 0) {
              setHours(prevH => prevH -1)
              setMinutes(59)
            } else {
              alert('done')
            }
        
    }, 1000)
    }
    return () => clearInterval(interval)
}, [seconds, pause])

  const handleStart = () => {

    if (!start && !pause) {
      const timeList = timer.split(':')
      setStart(true)
      setPause(true)
      setHours(timeList[0])
      setMinutes(timeList[1])
      setSeconds(timeList[2])

    } else if (pause) {
      setPause(false)
    } else {
      setPause(true)
    }
  }

  return (
    <>
      <div className='appContainer'>
      {start && <h1 className='startedTimer'>{`${hours}:${minutes}:${seconds}`}</h1>}      
       {!start && <input placeholder='00:00:00' onChange={(e) => setTimer(e.target.value)}></input>}
        <div className='buttonContainer'>  
          <button onClick={handleStart}>{pause ? 'Pause': 'Start'}</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  )
}

export default App
