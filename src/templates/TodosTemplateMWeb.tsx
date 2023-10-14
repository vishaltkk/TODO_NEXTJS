import React, { useState } from 'react';

import axios from 'axios';

import { Modal } from '../components/Modal';
import { TodoCreator } from '../components/TodoCreator';
import { TodoUpdater } from '../components/TodoUpdater';
import { useTodo } from '../lib/TodoContext';

function TodoCard({ todo, openEditModal, deleteTodo }) {
  return (
    <div className="mb-4 rounded bg-white p-4 shadow-lg">
      <h2 className="text-xl font-semibold">{todo.name}</h2>
      <p className="text-gray-600">{todo.description}</p>
      <p className="mt-2 text-blue-500">{todo.tag}</p>
      <div className="mt-2 flex justify-end">
        <button
          onClick={() => openEditModal(todo.id)}
          className="mr-2 rounded bg-blue-500 px-3 py-1 text-white"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="rounded bg-red-500 px-3 py-1 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function TodosTemplateMWeb() {
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
          console.error('Error deleting todo:', response.data.error);
        }
      } catch (error) {
        console.error('Error deleting todo:', error);
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
          <div className="w-full max-w-3xl rounded p-4">
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

            <div>
              {state?.todos
                ?.filter((todo) => filter === 'ALL' || filter === todo.tag)
                .map((todo) => (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    openEditModal={openModalUpdate}
                    deleteTodo={handleDeleteTodo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TodosTemplateMWeb };
