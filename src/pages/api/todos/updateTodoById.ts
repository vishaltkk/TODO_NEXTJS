import { PrismaClient, User, Tag } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

const updateTodoById = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const session = await getSession({ req });
  if (!session) {
    res.status(401).end('');
    return;
  }

  try {
    // Extract the todo ID, title, description, and status from the request body.
    const { todoId, title, description, tag } = req.body;

    // Use the session user's email as the userId to ensure they can only update their own todos.
    const userId = session.user.email;

    const userIds: User[] = await prisma.user.findMany({
      where: {
        email: userId,
      },
    });

    // Create an object with the fields to update, filtering out undefined values.
    let updateData = {
      ...(title && { title }),
      ...(description && { description }),
    };

    // Check if 'status' is provided and is a valid value based on the 'Tag' enum.
    if (tag !== undefined && ['IN_PROGRESS'].includes(tag)) {
      updateData = { ...updateData, ...{ tag: Tag.IN_PROGRESS } };
    }
    if (tag !== undefined && ['TODO'].includes(tag)) {
      updateData = { ...updateData, ...{ tag: Tag.TODO } };
    }
    if (tag !== undefined && ['DONE'].includes(tag)) {
      updateData = { ...updateData, ...{ tag: Tag.DONE } };
    }

    // Update the todo in the database where both the todo ID and user ID match.
    const updatedTodo = await prisma.todo.updateMany({
      where: {
        id: todoId,
        userId: userIds[0].id,
      },
      data: updateData,
    });

    // Check if the todo was successfully updated.
    if (updatedTodo) {
      res.status(200).json({ todo: updatedTodo });
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }

    // Close the Prisma client connection.
    await prisma.$disconnect();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default updateTodoById;
