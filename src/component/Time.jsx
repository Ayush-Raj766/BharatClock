import React from 'react'
import { useEffect  , useState} from 'react';
 
export default function Time() {
    
        const [time, setTime] = useState(new Date());

        useEffect(() => {
            const interval = setInterval(() => {
                setTime(new Date())
            }, 1000);
            return () => {
                clearInterval(interval)
            }
        }, [])
  return (
    <div>
      <p className='lead'> this is the current time : {time.toDateString()} - {time.toTimeString()}</p>

    </div>
  )
}

