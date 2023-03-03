import type { Session } from 'next-auth';

interface PrismaSession extends Session {
  expires: ISODateString;
}
