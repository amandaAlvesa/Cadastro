import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    
    let navigate = useNavigate();

    const {id}=useParams();

    const [user,setUser]= useState({
        name:"",
        userName:"",
        email:""
    });
    
    const{name, userName, email} = user;
    
    const onInputChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3434/user/${id}`,user);
        navigate("/");
    }

    const loadUser = async (e) =>{
         const result= await axios.get(`http://localhost:3434/user/${id}`)
         setUser(result.data)
    } 
     
    useEffect(() => {
        loadUser();
    },[])

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 bourder rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Editar Usuarios</h2>

                <form onSubmit={(e) =>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor='Name' className='form-label'>Nome</label>
                        <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Insira o Nome'
                            name='name'
                            value={name}
                            onChange={(e)=>onInputChange((e))}
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor='UserName' className='form-label'>Nome de Usuario</label>
                        <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Insira o Nome de Usuario'
                            name='userName'
                            value={userName}
                            onChange={(e)=>onInputChange((e))}
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor='Email' className='form-label'>Email</label>
                        <input 
                            type={'text'}
                            className='form-control'
                            placeholder='Insira o Email'
                            name='email'
                            value={email}
                            onChange={(e)=>onInputChange((e))}
                        />
                    </div>

                    <button className='btn btn-outline-success'>Editar</button>
                    <Link className='btn btn-outline-danger mx-2' to={"/"}>Cancelar</Link>
                </form>
            </div>
        </div>
    </div>  
  )
}
