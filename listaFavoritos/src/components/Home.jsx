import React from "react";
import appFirebase from '../firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);
const Home =()=>{
    return(
        <div>
            <h2 className="text-center"><button className="btn btn-primary" onClick={()=>signOut(auth)}>Logout</button>Bienvenido a tu lista de favoritos</h2>
        </div>
    )
}
export default Home;