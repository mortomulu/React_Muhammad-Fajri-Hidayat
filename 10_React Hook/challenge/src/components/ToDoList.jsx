import React, { useState } from 'react';

function ToDoList() {
  // Menggunakan useState untuk menyimpan array todos
  const [todos, setTodos] = useState([]);

  // Fungsi untuk menambahkan todo baru ke dalam array
  const addTodo = () => {
    setTodos(prevTodos => [...prevTodos, { id: todos.length + 1, text: 'New Todo' }]);
  };

  // Fungsi untuk menghapus todo berdasarkan id
  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>To Do List</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
