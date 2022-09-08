import React from 'react';
import Student from './Student';
import {v4 as uuid} from 'uuid';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Add(){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b= email;

        Student.push({id: uniqueId, Name: a, Email:b});

        history('/')
    }

    return <div className='center'>
        <form >
        <input type="text"  placeholder='Enter  your name'
         required onChange={(e) => setName(e.target.value)} className='form'/>

        <input type="text"  placeholder='Enter  your Email' 
        required onChange={(e) => setEmail(e.target.value)} className='form'/>

        <div className="container">
        <button onClick={(e) => handleSubmit(e)} type='submit'  className='form-btn need'>Submit</button>
        </div>
        </form>
    </div>
}

export default Add;