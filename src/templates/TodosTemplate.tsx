import React, { useState } from 'react';

import axios from 'axios';

import { Modal } from '../components/Modal';
import { TodoCreator } from '../components/TodoCreator';
import { TodoUpdater } from '../components/TodoUpdater';
import { useTodo } from '../lib/TodoContext';

function TodosTemplate() {
  const { dispatch } = useTodo();
  const { state } = useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('ALL');
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalUpdate = (id) => {
    let todoBase = null;
    state?.todos?.forEach((todo) => {
      if (todo.id === id) todoBase = todo;
    });
    setEditId(todoBase);
    setIsModalOpenUpdate(true);
  };

  const closeModalUpdate = () => {
    setIsModalOpenUpdate(false);
  };

  const handleDeleteTodo = async (id) => {
    if (id) {
      try {
        const todoData = { todoId: id };

        const response = await axios.post(
          '/api/todos/deleteTodoById',
          todoData,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          dispatch({ type: 'DELETE_TODO', payload: id });
        } else {
          // eslint-disable-next-line no-console
          console.error('Error creating todo:', response.data.error);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error creating todo:', error);
      }
    }
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div className="App overflow-auto">
      <div id="modal-root"></div>

      <div>
        <Modal isOpen={isModalOpen} handleClose={closeModal}>
          <TodoCreator onClose={closeModal} />
        </Modal>
        <Modal isOpen={isModalOpenUpdate} handleClose={closeModalUpdate}>
          <TodoUpdater onClose={closeModalUpdate} todo={editId} />
        </Modal>

        <div className="flex h-screen items-center justify-center">
          <div className="w-full max-w-3xl rounded bg-gray-100 p-4 shadow-lg">
            <div className="mb-4 flex max-w-3xl justify-between">
              <h1 className="text-2xl font-semibold">Todo List</h1>
              <button
                onClick={openModal}
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                Create Todo
              </button>
            </div>
            <div className="mb-4 flex max-w-3xl justify-between">
              <h3 className="text-xl font-semibold">Filter todo by status</h3>

              <select
                className="mt-2 rounded border p-2"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="ALL">All</option>
                <option value="TODO">Todo</option>
                <option value="IN_PROGRESS">Progress</option>
                <option value="DONE">Done</option>
              </select>
            </div>

            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-2">Task Name</th>
                  <th className="border p-2">Task Description</th>
                  <th className="border p-2">Task Status</th>
                  <th className="border p-2">Edit Task</th>
                  <th className="border p-2">Delete Task</th>
                </tr>
              </thead>
              <tbody>
                {state?.todos?.map((todo) =>
                  filter === 'ALL' || filter === todo.tag ? (
                    <tr key={todo.id} className="text-center">
                      <td className="border p-2">{todo.name}</td>
                      <td className="max-w-sm truncate border p-2">
                        <p className="truncate">{todo.description}</p>
                      </td>
                      <td className="border p-2">{todo.tag}</td>
                      <td className="border p-2">
                        <button
                          className="rounded bg-blue-500 px-2 py-1 text-white"
                          onClick={() => openModalUpdate(todo.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="border p-2">
                        <button
                          className="rounded bg-blue-500 px-2 py-1 text-white"
                          onClick={() => handleDeleteTodo(todo.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TodosTemplate };
