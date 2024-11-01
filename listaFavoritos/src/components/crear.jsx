import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import { db }  from "../firebaseConfig";
import {getAuth} from 'firebase/auth'




const Crear = () => {
    const [ descripcion, setDescripcion ] = useState('')
    const [ stock, setStock ] = useState (0)
    const navigate = useNavigate()
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const articulosCollection =collection(db, `usuarios/${userId}/articulos`);

    
    const store = async (e) => {
    e.preventDefault()          
    await  addDoc( articulosCollection, { descripcion: descripcion, stock: stock } )
    navigate('/');
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>crear Articulo</h1>
                    <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Descripcion</label>
                        <input
                        value={descripcion}
                        onChange={ (e) => setDescripcion(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>stock</label>
                        <input
                        value={stock}
                        onChange={ (e) => setStock(e.target.value)}
                        type="number"
                        className='form-control'
                    />
                    </div>
                    <button type ='submit' className='btn btn-primary'>store</button>
                    </form>

                </div>
            </div>
        </div>
    )
    
}

export default Crear;