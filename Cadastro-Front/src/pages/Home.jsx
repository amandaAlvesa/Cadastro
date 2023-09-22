import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ViewUser from '../users/ViewUser';


export default function Home() {
 
  const {id} = useParams();

    const loadUsers = async() =>{
        const result = await axios.get('http://localhost:3434/users');
        setUsers(result.data);
    }
    
    const deleteUser = async(id) => {
      await axios.delete(`http://localhost:3434/user/${id}`)
      loadUsers();
    }

    useEffect(() =>{
      loadUsers();
    },[])

    const [users,setUsers]= useState([]);
    
    return (
    <div className='container'>
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Nome</th>
      <th scope="col">Nome de Usuario</th>
      <th scope="col">Email</th>
      <th scope='col'>Ação</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((users,index) =>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{users.name}</td>
                <td>{users.userName}</td>
                <td>{users.email}</td>

                <td>
                    <Link className='btn btn-outline-success mx-2'
                      to={`/viewuser/${users.id}`}
                    >Visualizar</Link>
                    <Link className='btn btn-outline-warning mx-2' 
                      to={`/edituser/${users.id}`}
                    >Editar</Link>
                    <button className='btn btn-outline-danger mx-2' 
                      onClick={() => deleteUser(users.id)}
                    >Deletar</button>
                </td>
            </tr>
        ))
    }
   
  </tbody>
</table>
        </div>
    </div>
  )
}

