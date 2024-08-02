import { useState } from 'react'
import React from "react"

const TodoForm = ( {addTodo} ) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }    


    return <div className="todo-form">
    
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit} >
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Digite o título"/>
            <select value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit" >Criar Tarefa</button>
        </form>
    </div>;
};

export default TodoForm;
