import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom"
import { getDoc, updateDoc, doc } from  "firebase/firestore"
import { db } from  "../firebaseConfig"
import {getAuth} from 'firebase/auth'

const Editar = ()  => {

    const [ descricion, setDescricion ] = useState('')
    const [ stoct, setStoct ] = useState (0)
    const navigate = useNavigate()
    const {id} = useParams()
    const auth = getAuth()
    const userId = auth.currentUser.uid
     
    const update  = async (e)  => {
        e.preventDefault()
        const articulosDoc = doc(db, `usuarios/${userId}/articulos`,id)
        const data = {descricion: descricion, stoct: stoct}
        await updateDoc(articulosDoc, data)
        navigate('/')

    }

    const getProductById = async(id) => {
        const articulosDoc = await getDoc(doc(db, `usuarios/${userId}/articulos`, id))
        if(articulosDoc.exists()){
            
            setDescricion(articulosDoc.data().descricion)
            setStoct(articulosDoc.data().stoct)

        }else{
            console.log('el articulo no existe ')
        }

    }

    useEffect( () => {
        getProductById(id)
    }, [])



    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>editar producto</h1>
                    <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Descricion</label>
                        <input
                        value={descricion}
                        onChange={ (e) => setDescricion(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>stock</label>
                        <input
                        value={descricion}
                        onChange={ (e) => setStoct(e.target.value)}
                        type="number"
                        className='form-control'
                    />
                    </div>
                    <button type ='submit' className='btn btn-primary'>update</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
 export default Editar;