import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const CreateNote =(props) =>
{
    const[expand,setExpand]=useState(false);
    const[note,setNote]=useState({
        title:"",
        content:""
    });

    const InputEvent = (event) =>
    {
        // const value=event.target.value;
        // const name=event.target.name;

        const{name,value} =event.target; 

        setNote((prevData)=>
        {
            return{...prevData,[name]:value}
        })
    };

    const addEvent = () =>
    {
props.passNote(note);
setNote({
    title:"",
    content:""
});
    };

    const expandIt = () =>
    {
        setExpand(true);
    };
    const backtonormal = () =>
    {
        setExpand(false);
    };
 

    
    return <>
<div className="main_note">
    <form>
    {
        expand?
        <input type="text" 
        value={note.title} 
        onChange={InputEvent} 
        placeholder="Title"
         name="title"
        autoComplete="off"
        />:null}
        <textarea rows="" 
        value={note.content}
        onChange={InputEvent}
        column="" 
        onClick={expandIt}
        onDoubleClick={backtonormal}
        name="content"
        placeholder="Write a note...."/>
        {expand?<Button variant="outlined" onClick={addEvent}><AddIcon className="plus_sign"/></Button>
:null}
    </form>
</div>

    </>;
};

export default CreateNote;