import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Registro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const registro = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Registrarse</h1>
                    <form onSubmit={registro}>
                        <div className='mb-3'>
                            <label className='form -label'>Correo Electrónico</label>
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className='form-control'
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Registrarse</button>
                    </form>
                    <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Registro;