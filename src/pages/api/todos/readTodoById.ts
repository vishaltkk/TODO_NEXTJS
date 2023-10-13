import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

const readTodoById = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }
  const session = await getSession({ req });
  if (!session) {
    res.status(401).end('');
    return;
  }

  try {
    // Retrieve the 'todoId' from the query parameters.
    const { todoId } = req.query;

    if (!todoId) {
      res
        .status(400)
        .json({ error: 'Todo ID not provided in the query parameters' });
      return;
    }

    // Fetch the todo by ID.
    const todo = await prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });

    // Check if the todo exists.
    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      // Return the todo as JSON.
      res.status(200).json({ todo });
    }

    // Close the Prisma client connection.
    await prisma.$disconnect();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching todo:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default readTodoById;
