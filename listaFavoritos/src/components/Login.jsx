import React, { useState } from 'react'
import appFirebase from '../firebaseConfig';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {Link} from 'react-router-dom'


const Login = () => {
    const[email, setEmail] = useState()
    const[contraseña,setContraseña] = useState()
    const auth = getAuth();

    const login = async(e) =>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, contraseña)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={login}>
                <div className='mb-3'>
                    <label className='form-label'>Correo Electrónico</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Contraseña</label>
                    <input
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        type="password"
                        className='form-control'
                    />
                </div>
                    <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
            </form>
                <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login
