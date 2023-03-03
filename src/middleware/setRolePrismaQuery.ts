import { Role, User } from '@prisma/client';

import prisma from '../lib/prisma';

const setRolePrismaQuery = async (
  email: string,
  role: Role
): Promise<User | null> => {
  return prisma.user.update({
    where: { email },
    data: {
      roles: role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      image: true,
      roles: true,
    },
  });
};

export { setRolePrismaQuery };
