import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Role } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '../../../lib/prisma';
import { setRolePrismaQuery } from '../../../middleware/setRolePrismaQuery';

let userType = '';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  if (req.body.userType !== undefined) {
    userType = req.body.userType;
  }
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
      jwt({ token, user, isNewUser }) {
        if (user) {
          if (isNewUser) {
            if (userType) {
              if (userType === 'candidate') {
                setRolePrismaQuery(user.email, Role.CANDIDATE);
              }
              if (userType === 'company') {
                setRolePrismaQuery(user.email, Role.COMPANY);
              }
            }
            // set user role in prisma
          }
          // eslint-disable-next-line no-param-reassign
          token.role = user.role;
        }
        return token;
      },
      // eslint-disable-next-line unused-imports/no-unused-vars
      session({ session, token, user }) {
        if (session.user) {
          // eslint-disable-next-line no-param-reassign
          session.user.role = token.role;
        }
        return session;
      },
    },
  });
}
