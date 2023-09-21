import React from 'react'

export default function AddUser() {
    
    const loadUsers = async() =>{
        const result = await axios.get('http://localhost:3434/users');
        setUsers(result.data);
    }
    useEffect(() =>{
      loadUsers();
    },[])

    const [users,setUsers]= useState([]);
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 bourder rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Cadastrar Usuarios</h2>

                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>Nome</label>
                    <input 
                        type={'text'}
                        className='form-control'
                        placeholder='Insira o Nome'
                        name='name'
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor='UserName' className='form-label'>Nome de Usuario</label>
                    <input 
                        type={'text'}
                        className='form-control'
                        placeholder='Insira o Nome de Usuario'
                        name='userName'
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor='Email' className='form-label'>Email</label>
                    <input 
                        type={'text'}
                        className='form-control'
                        placeholder='Insira o Email'
                        name='email'
                    />
                </div>

                <button className='btn btn-outline-success'>Cadastrar</button>
                <button className='btn btn-outline-danger mx-2'>Cancelar</button>
            </div>
        </div>
    </div>  
  )
}
