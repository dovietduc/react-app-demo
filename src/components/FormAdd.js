import {useEffect, useState} from 'react';


function FormAdd({addDataInput, itemEditting, handleUpdateTodo}) {
   

    let idUpdate = 0;
    if (itemEditting) {
        idUpdate = itemEditting.id;
    }

    console.log('idUpdate', idUpdate);
   
    const [valueInput, setValueInput] = useState('');
    function handleChange(event) {
        setValueInput(event.target.value);
    }

    function handleAdd() {
        // truyền data từ con lên cha
        addDataInput(valueInput);
        // reset input
        setValueInput('');
    }

    function handleUpdate(id) {
        handleUpdateTodo(id, valueInput);
        setValueInput('');

        // increment
    }

    useEffect(function() {
        console.log('useEffect running');
        if(itemEditting) {
            setValueInput(itemEditting.name);
        }
    }, [idUpdate])


    function renderButton() {
        if(itemEditting) {
            return (
                <span className="addBtn" onClick={() => handleUpdate(itemEditting.id)}>
                    Update
                </span>
            )
        } else {
            return (
                <span className="addBtn" onClick={handleAdd}>
                    Add
                </span>
            );
        }
    }
    
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input
                onChange={handleChange}
                value={valueInput}
                type="text"
                id="myInput"
                placeholder="Title..."
            />
           
            { renderButton() }
        </div>
    )
}

export default FormAdd;