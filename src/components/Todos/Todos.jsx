import React from "react";
import styles from "./Todos.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";

export default function Todos () {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();


    return(
        <>
            {todos.map((todo) => (
                <>
                    <h1>{todo.text}</h1>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </>
            ))}
        </>
    )
}