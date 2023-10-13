// pages/api/deleteTodo.js

import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function deleteTodoById(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const session = await getSession({ req });
  if (!session) {
    res.status(401).end();
    return;
  }

  try {
    const { todoId } = req.body; // Extract the todoId from the request body.

    if (!todoId) {
      res.status(400).json({ error: 'Missing required parameters' });
    }

    // Use the session user's email as the userId to ensure they can only delete their own todos.
    const userIds = await prisma.user.findMany({
      where: {
        email: session.user.email,
      },
    });

    // Delete the todo from the database where both the todo ID and user ID match.
    const deleteResult = await prisma.todo.deleteMany({
      where: {
        id: todoId,
        userId: userIds[0].id,
      },
    });

    // Check if the todo was successfully deleted.
    if (deleteResult) {
      res.status(200).end(); // Respond with a 204 No Content status.
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }

    // Close the Prisma client connection.
    await prisma.$disconnect();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
