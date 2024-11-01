import React, {useState,useEffect} from "react";
import appFirebase from '../firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
import {Link} from 'react-router-dom'
import {collection,getDocs,deleteDoc,doc} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal);
const auth = getAuth(appFirebase);

const Home =()=>{
    const [articulos,SetArticulos] = useState([])
    const userId = auth.currentUser.uid
    const Articuloscollection = collection(db, `usuarios/${userId}/articulos`);

    const getArticulos = async() =>{
        const data = await getDocs(Articuloscollection)
        SetArticulos(
         data.docs.map( (doc) =>({...doc.data(),id:doc.id}))
        )
        console.log(articulos)
    }

    const deleteArticulos = async (id) => {
        const articulosDoc = doc(db,`usuarios/${userId}/articulos`,id )
        await deleteDoc(articulosDoc)
        getArticulos()
    }

    useEffect(()=>{
        getArticulos();
    },[])

    return (
        <div className='container'>
            <h2 className="text-center"><button className="btn btn-primary" onClick={()=>signOut(auth)}>Logout</button>Bienvenido a tu lista de favoritos</h2>
            <div className='row'>
                <div className='col'> 
                    <div className="d-grid gap-2">
                    <Link to="/crear" className='btn btn-secondary mt-2 mb-2'>Crear</Link>
    
                    </div>
                    <table className='table table-dark table-hover'> 
                        <thead> 
                            <tr>
                                <th>Descripcion</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articulos.map((articulos)=>(
                                <tr key={articulos.id}>
                                    <td>{articulos.descripcion}</td>
                                    <td>{articulos.stock}</td>
                                    <td>
                                        <Link to={`/editar/${articulos.id}`} className="btn btn-light">Editar</Link>
                                        <button onClick={()=> {deleteArticulos(articulos.id)}} className="btn btn-danger">Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
    
                </div>
            
            </div>
          
        </div>
      )
}
export default Home;






