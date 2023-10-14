import React, { useState } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

import { useTodo } from '../../lib/TodoContext';

const TodoCreator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { dispatch } = useTodo();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('TODO');

  const handleAddTodo = async () => {
    if (name && description && tag) {
      try {
        const todoData = { name, description, tag };

        const response = await axios.post('/api/todos/createTodo', todoData, {
          withCredentials: true,
        });

        if (response.status === 200) {
          const createdTodo = response.data.todo;
          dispatch({ type: 'ADD_TODO', payload: createdTodo });
          onClose(); // Close the modal after adding a todo
        } else {
          toast('Error updating TODO');
        }
      } catch (error) {
        toast('Error updating TODO');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800">
      <div className="relative max-w-md rounded-lg bg-white p-4 shadow-md">
        <button
          onClick={onClose} // Close button click handler
          className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-4 text-2xl font-semibold">Create Todo</h2>
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded border p-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 w-full rounded border p-2"
          rows={4} // Specify the number of rows in the textarea
        />
        <select
          className="mt-2 w-full rounded border p-2"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        >
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">Progress</option>
          <option value="DONE">Done</option>
        </select>
        <button
          onClick={handleAddTodo}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export { TodoCreator };
