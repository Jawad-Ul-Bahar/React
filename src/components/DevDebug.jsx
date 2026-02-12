import { useState, useEffect } from 'react'

export default function DevDebug() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('DevDebug mounted, count =', count)
  }, [count])

  return (
    <div id="dev-debug-banner" style={{position: 'fixed', right: 12, bottom: 12, zIndex: 9999}}>
      <button className="btn btn-sm btn-outline-success" onClick={() => setCount(c => c + 1)}>DevDebug: {count}</button>
    </div>
  )
}
