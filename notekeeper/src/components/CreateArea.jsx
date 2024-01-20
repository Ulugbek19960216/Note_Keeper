import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {
const [note, setNote] = useState({
    title: "",
    content: ""
})

 
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
                <input 
                    onChange={handleChange}
                    value={note.title}
                    name="title" 
                    placeholder="Title"/>
                <textarea 
                    onChange={handleChange}
                    value={note.content}
                    name="content" 
                    placeholder="Take a note..." rows="3"/>
                <button 
                    onClick={addForm}>
                        <AddIcon/>
                </button>
            </form>
        </div>
    )
}


export default CreateArea;