import React from 'react'
import Inputs from './Components/Inputs'
import YourNotes from './Components/Your Notes/YourNotes'

const App = () => {
  return (
    <div className='bg-black w-screen h-screen flex'>
      <Inputs/>
      <YourNotes/>
    </div>
  )
}

export default App