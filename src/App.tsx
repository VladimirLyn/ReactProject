// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Dialog } from './components/Dialog'
import { Contacts } from './components/Contacts'
import { UserInput } from './components/UserInput'
import { UserOnDisplay } from './components/UserOnDisplay'

function App() {
  //const [count, setCount] = useState(0)
  return (
   <div className='App'>
    <Contacts/>
    <div>
    <UserOnDisplay/>
    <Dialog/>
    <UserInput/>
    </div>
   </div>
  )
}

export default App
