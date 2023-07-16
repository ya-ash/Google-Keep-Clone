import React from "react";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
const Note =(props) =>
{
    const deleteNote = () =>
    {
        props.deleteItem(props.id);
    };
    return <>
        <div className="note">
            <h1> {props.title} </h1>
            <br/>
            <p>{props.content}</p>
            <button className="btn" onClick={deleteNote}>
            <DeleteOutlineRoundedIcon className="deleteIcon"/>
            </button>
        </div>
    </>; 
};

export default Note;  