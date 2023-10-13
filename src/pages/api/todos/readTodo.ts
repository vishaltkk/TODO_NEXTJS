import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

const readTodo = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).end();
  }
  const session = await getSession({ req });
  if (!session) {
    res.status(401).end('');
  }

  // Use the session user's email as the userId to ensure they can only delete their own todos.
  const userId = session.user.email;

  try {
    // Fetch todos with the specified tag.
    const todos = await prisma.todo.findMany({
      where: {
        userId,
      },
    });

    // Close the Prisma client connection.
    await prisma.$disconnect();

    res.status(200).json({ todos });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default readTodo;
