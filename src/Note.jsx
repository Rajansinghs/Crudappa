import React from 'react';

const Note = (props) => {

  
  const deleteNote = () =>{
    props.deleteItem(props.id);
};

  return (
    <>
    <div className="mNote">
        <div className='live'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="delete">
          <button onClick={deleteNote}>Delete</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default Note;
