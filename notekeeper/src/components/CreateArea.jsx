import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
const [note, setNote] = useState({
    title: "",
    content: ""
})

const [isExpanded, setIsExpanded] = useState(false);

function expand() {
    setIsExpanded(true);
}

 
function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
    });

}

function addForm(event){
    props.onAdd(note)
    setNote({
        title: "",
        content: ""
    })
    event.preventDefault();
}

    return (
        <div>
            <form className="create-note">
                { isExpanded && <input 
                    onChange={handleChange}
                    value={note.title}
                    name="title" 
                    placeholder="Title"/>}
                <textarea 
                    onChange={handleChange}
                    value={note.content}
                    name="content" 
                    onClick={expand}
                    placeholder="Take a note..." rows={isExpanded ? 3 : 1 }/>
            <Zoom in={isExpanded}>
                <Fab 
                    onClick={addForm}>
                        <AddIcon/>
                </Fab>
            </Zoom>
            </form>
        </div>
    )
}


export default CreateArea;