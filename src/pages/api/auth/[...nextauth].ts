import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '../../../lib/prisma';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    jwt: {
      maxAge: 10 * 24 * 60 * 60,
    },
    session: {
      strategy: 'jwt',
      maxAge: 10 * 24 * 60 * 60,
    },
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error',
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID
          ? process.env.GOOGLE_CLIENT_ID
          : '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
          ? process.env.GOOGLE_CLIENT_SECRET
          : '',
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
            userType: 'company' || 'candidate',
          },
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async redirect() {
        // Allows relative callback URLs
        return `${process.env.NEXT_SITE_URL}/todos`;
      },
    },
  });
}
