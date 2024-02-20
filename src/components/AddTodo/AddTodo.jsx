import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

export default function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));
        setInput('');
    }


    return(
        <>
            <h1>Add Todo</h1>
            <form className={styles.container} onSubmit={handleAddTodo}>
                <input type="text" placeholder="Add a Todo" className={styles.input} value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className={styles.button} type="submit">Add</button>
            </form>
        </>
    )
}