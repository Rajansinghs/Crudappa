import React from 'react';
import Student from './Student';
import {Link, useNavigate} from 'react-router-dom';

const Home = () => {

    let history = useNavigate();

    
    const handleEdit = (id, name, email) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Student.map((e) =>{
            return e.id
        }).indexOf(id);

        Student.splice(index,1);

        history('/');
    }

  return (
    <>
        <div className='container'>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {
                        Student && Student.length > 0 
                        ?
                        Student.map((item) => {
                            return(
                                <tr >
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Email}
                                    </td>
                                    <td className='box'>
                                        <button onClick={() => handleDelete(item.id)} className='delete'>Delete</button>
                                        <br />
                                        <Link to={'/edit'} >
                                        <button onClick={() => handleEdit(item.id, item.Name, item.Email) } className='delete edit'>Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </table>
        </div>
        <div className="create">
            <Link to='/create'>
            <button  className='need'>Create</button>
            </Link>
        </div>
    </>
  )
}

export default Home;
