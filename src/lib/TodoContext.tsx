import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';

type Todo = {
  id: string;
  name: string;
  description: string | null;
  tag: string;
};

interface State {
  todos: Todo[];
  loading: boolean;
  error?: string;
}

type Action =
  | { type: 'SET_TODOS'; payload: Todo[] }
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'UPDATE_TODO'; payload: Todo } // Action for updating a todo
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string };

const initialState: State = {
  todos: [],
  loading: true,
  error: '',
};

const TodoContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload, loading: false };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };
    case 'DELETE_TODO':
      // eslint-disable-next-line no-case-declarations
      const deletedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: deletedTodos,
        loading: false,
      };
    case 'UPDATE_TODO':
      // eslint-disable-next-line @typescript-eslint/no-redeclare, no-case-declarations
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        loading: false,
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const TodoProvider: React.FC<{ children: ReactNode; todos: Todo[] }> = ({
  children,
  todos,
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_TODOS', payload: todos });
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
