import React, { useState } from 'react';

const Create = (props) => {

  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title:"",
    textarea: "",
  });

  const InputEvent = (event) => {

    const {name, value} = event.target;

    setNote((prevData) =>{
        return {
            ...prevData,
            [name]: value,
        };
    });
};

const addEvent = () => {
  props.passNote(note);
  setNote({
      title: "",
      content: "",
  });
};

const expendIt = () => {
  setExpand(true);
};

const btoNormal = () =>{
  setExpand(false);
};
  return (
    <>
    <div className="create">
    <div className="box" onDoubleClick={btoNormal}>
    {expand?
        <input type="text" placeholder='Title' value={note.title} onChange={InputEvent} name="title"/>
    :null}
    
        <textarea placeholder='Write a short note...' className='textarea' value={note.content}
        onChange={InputEvent} name="content"
        onClick={expendIt}
        ></textarea>
    
 {expand?   
        <div className="button" >
        <button onClick={addEvent} >+</button>
        </div>
 :null}
    </div>
    </div>
    </>
  )
}

export default Create;
