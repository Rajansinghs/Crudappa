import React from 'react';
import Student from './Student';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Edit(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Student.map( (e) =>{
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Student[index];
        a.Name = name;
        a.Email = email;

        history('/')
    }

    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setId(localStorage.getItem('Id'))
    },[])

    return (
        <div className='center'>
            <form>
        <input type="text"  placeholder='Enter  your name' value={name} 
        required onChange={(e) => setName(e.target.value)} className='form'/>

        <input type="text"  placeholder='Enter  your Email' value={email}
         required onChange={(e) => setEmail(e.target.value)} className='form'/>
         <div className="container">
        <button onClick={(e) => handleSubmit(e)} type='submit' className='form-btn need'>Update</button>
        </div>
        </form>
        </div>
    )
}

export default Edit;