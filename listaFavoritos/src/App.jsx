import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import appFirebase from './firebaseConfig'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from './components/Login'
import Home from './components/Home'

const auth = getAuth(appFirebase)

function App() {
  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
  }else{
    setUsuario(null)
  }
  })
  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
    </div>
  )
}

export default App
