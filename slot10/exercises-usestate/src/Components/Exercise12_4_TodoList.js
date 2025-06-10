import React, { useState } from 'react';

function Exercise12_4_TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <section className="text-center p-10">
      <h2 className="text-2xl font-bold mb-4">Bài 4: Danh sách công việc</h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-3 py-2 mr-2"
          placeholder="Thêm công việc..."
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={addTodo}
        >
          Thêm
        </button>
      </div>
      <ul className="list-disc list-inside">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">
            {todo}
            <button
              className="ml-4 text-red-600 underline"
              onClick={() => removeTodo(index)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Exercise12_4_TodoList