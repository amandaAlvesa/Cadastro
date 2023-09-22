import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() 

{
    const {id}=useParams();

    const [user, setUser] =useState({
        name:"",
        userName:"",
        email:""
    })

    const loadUser = async (e) =>{
        const result= await axios.get(`http://localhost:3434/user/${id}`)
        setUser(result.data)
   } 

   useEffect(()=>{
        loadUser();
    },[])

    
 
    
  
  return (
    <div className="container">
        <div className="row">
        <   div className="col-md-6 offset-md-3 bourder rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Detalhes do Usuario: ID = {user.id}</h2>
                <div className="card">
                    <div className="card-header">
                        <ul className='list-group list-gorup-flush'>
                            <li className='list-group-item'>                            
                                <b>Nome: </b> 
                                {user.name}
                            </li>
                            <li className='list-group-item'>                            
                                <b>Nome de Usuario: </b>
                                {user.userName}
                            </li>
                            <li className='list-group-item'>                            
                                <b>Email:  </b>
                                {user.email}
                            </li>    
                        </ul>    
                    </div>    
                </div>
                <Link className='btn btn-outline-success my-2' to={"/"}>Voltar</Link> 
            </div>
        </div>
    </div>
  )
}

