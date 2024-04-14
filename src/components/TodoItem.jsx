import styles from "./todoitem.module.css"
import {useState} from "react";

export default function TodoItem({item, todos, setTodos}) {
    const [editable, setEditable] = useState(false);
    const [editedName, setEditedName] = useState({name: item.name, id: item.id});

    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo.id !== item.id));
    }

    function handleChange(e) {
        setEditedName({...editedName, name: e.target.value});
    }

    function handleEdit() {
        setEditedName(item);
        setEditable(!editable);
    }

    function handleClick(id) {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? {...todo, done: !todo.done} : todo);
        setTodos(updatedTodos);
    }

    function handleSave() {
        if (editedName.name !== '') {
            const updatedTodos = todos.map((todo) => {
                if (todo.id === editedName.id) {
                    return {...todo, name: editedName.name}
                }
                return todo
            })
            setTodos(updatedTodos);
            setEditable(!editable);
        }
    }

//kodel funkcija rasosi be (), ty handleChange, nes nieko nepaduodu?
    // onChange={handleChange}
    const className = item.done ? styles.completed : "";
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
                {editable ? (
                    <>
                        <input className={styles.inputText} type="text" onChange={handleChange}
                               value={editedName.name}/>
                        <button onClick={handleSave} className={styles.saveButton}>Save</button>
                    </>
                ) : (
                    <>
                        <span className={className} onClick={() => handleClick(item.id)}> {item.name} </span>
                    </>
                )}
                <span>
                    <button onClick={() => handleEdit(editable)} className={styles.editButton}>
                        {editable ? 'Cancel' : 'Edit'}
                    </button>
                </span>
            </div>
        </div>
    )
}