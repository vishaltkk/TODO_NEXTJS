import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { useTodo } from '../../lib/TodoContext';

interface Todo {
  id: string;
  name: string;
  description: string;
  tag: string;
}

interface TodoUpdaterProps {
  todo: Todo;
  onClose: () => void;
}

const TodoUpdater: React.FC<TodoUpdaterProps> = ({ todo, onClose }) => {
  const { dispatch } = useTodo();
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [tag, setTag] = useState(todo.tag);

  useEffect(() => {
    setName(todo.name);
    setDescription(todo.description);
    setTag(todo.tag);
  }, [todo]);

  const handleUpdateTodo = async () => {
    if (name && description && tag) {
      try {
        const updatedTodo = { id: todo.id, name, description, tag };

        const response = await axios.post(
          '/api/todos/updateTodoById',
          updatedTodo,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          // Dispatch an action to update the todo in the context state
          dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
          onClose();
        } else {
          console.error('Error updating todo:', response.data.error);
        }
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800">
      <div className="relative max-w-md rounded-lg bg-white p-4 shadow-md">
        <button
          onClick={onClose}
          className="hover-text-gray-800 absolute top-2 right-2 cursor-pointer text-gray-600"
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
        <h2 className="mb-4 text-2xl font-semibold">Update Todo</h2>
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
          rows={4}
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
          onClick={handleUpdateTodo}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Update Todo
        </button>
      </div>
    </div>
  );
};

export { TodoUpdater };
