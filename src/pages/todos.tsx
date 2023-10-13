import React from 'react';

import { PrismaClient, User } from '@prisma/client';
import { getSession } from 'next-auth/react';

import { TodoProvider } from '../lib/TodoContext';
import { TodosTemplate } from '../templates/TodosTemplate';
import { TodosTemplateMWeb } from '../templates/TodosTemplateMWeb';
import useIsMobile from '../utils/useIsMobile';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const userId = session.user.email;

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin', // Redirect to the login page or any other page
        permanent: false, // Set this to true if you want a 301 redirect
      },
    };
  }

  let todos = [];
  try {
    const userIds: User[] = await prisma.user.findMany({
      where: {
        email: userId,
      },
    });

    if (!userId[0]) {
      throw new Error('User not found');
    }

    // Fetch todos with the specified tag.
    todos = await prisma.todo.findMany({
      where: {
        userId: userIds[0].id,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching todos:', error);
  }

  await prisma.$disconnect();

  // Your code here - fetch data or perform server-side operations

  return {
    props: {
      todos,
      session,
    },
  };
}

interface TodoPageProp {
  todos: any[];
}

const Todos: React.FC<TodoPageProp> = (props) => {
  const isMobileView = useIsMobile();
  return (
    <TodoProvider todos={props.todos}>
      {isMobileView ? <TodosTemplateMWeb /> : <TodosTemplate />}
    </TodoProvider>
  );
};

export default Todos;
