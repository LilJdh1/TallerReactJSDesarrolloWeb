import React, { useState } from 'react'
import appFirebase from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);
const Login = () => {
    const[registrando, setRegistrando] = useState(false);
    const functAutentication = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        if(registrando){
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("Asegurese que la contraseña tenga mas de 8 caracteres")
            }
            
        }else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert("El correo y/o Contraseña son incorrectos")
            }
            
        }
    }   
  return (
    <div className='container'>
      <h2 className='text-center '>Inicia sesion en tu cuenta</h2>
      <div className='row'>
        
        <div className='col-md-4'>
            <div className='padre'>
                <div className='card card-body  shadow-lg'>
                    <form onSubmit={functAutentication}>
                        <input type='text' placeholder='Ingresar email' className='cajatexto' id='email'/>
                        <input type='password' placeholder='Ingresar contraseña' className='cajatexto' id='password'/>
                        <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                    </form>
                    <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>
                </div>
            </div>
        </div>
        <div className='col-md-8'>
        </div>
      </div>
    </div>
  )
}
export default Login
