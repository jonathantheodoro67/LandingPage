import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Welcome to your React App
        </h1>
        <div className="card">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App