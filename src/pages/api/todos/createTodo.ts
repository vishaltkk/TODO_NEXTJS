import { PrismaClient, Tag, User } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

const createTodo = async (req, res) => {
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
    // Parse the JSON request body to extract the todo data.
    const { name, description, tag } = req.body;

    const userid: User[] = await prisma.user.findMany({
      where: { email: session.user.email },
    });

    if (!userid[0]) {
      res.status(401).end('');
    }

    // Create a new todo in the database.
    const todo = await prisma.todo.create({
      data: {
        name,
        description,
        ...(tag === 'IN_PROGRESS' && { tag: Tag.IN_PROGRESS }),
        ...(tag === 'DONE' && { tag: Tag.DONE }),
        ...(tag === 'TODO' && { tag: Tag.TODO }),
        userId: userid[0].id, // Assign the todo to the authenticated user.
      },
    });

    // Return the newly created todo as JSON.
    res.status(200).json({ todo });

    // Close the Prisma client connection.
    await prisma.$disconnect();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export default createTodo;
