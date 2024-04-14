import {useState} from "react";
import styles from './form.module.css';

export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name: "", done: false, id: 0});

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done: false, id: Date.now()});
    }

    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.modernInput}
                    onChange={(e) => setTodo({name: e.target.value, done: false, id: Date.now()})}
                    value={todo.name}
                    type="text"
                    placeholder="Enter todo item..."/>
                {todo.name !== "" ? (
                <button className={styles.modernButton} type="submit">Add</button>
                    ):""
                }
            </div>
        </form>
    )
}