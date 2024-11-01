import { useState } from 'react'
import './App.css'
import appFirebase from './firebaseConfig'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from './components/Login'
import Home from './components/Home'
import Crear from './components/crear'
import Editar from './components/editar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

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
    <BrowserRouter>
      <div>
        {usuario ? (
          <Routes>
            <Route path='/' element={<Home correoUsuario={usuario.email} />} />
            <Route path='/crear' element={<Crear />} />
            <Route path='/editar/:id' element={<Editar />} />
          </Routes>
        ) : (
          <Login />
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
