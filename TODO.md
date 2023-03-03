Prior 0

Write test cases for the seed files using git hook and development db usage.

Need to Create Model for User and their relative mobile number.

Prior 1

// Need to check if updation of Email in the client side for session related information effects the database 
// Data Base Penetration Testing


# Remove the w3 xml retirverver url in svg to avoid third part xml injection attacks.

# Also need to move svg's to public folder so as to reduce the load time.


Prior 2

# Need to fix Grapqhl based eeror when adding type: module in package.json file and while adding th efile 

/types/contextPayload.ts

import { IncomingMessage, ServerResponse } from "http";

export type ContextPayload = {
  req: IncomingMessage;
  res: ServerResponse;
};


checkPlanForGivenUserEmail.ts

import { Plan } from '@prisma/client';

import prisma from '../lib/prisma';
import { UserWithSubscriptionPayDetail } from '../types/models';
import { getPlanDetails } from './getPlanDetails';

const checkPlanForGivenUserEmail = async (
  email: string,
  planName: string
): Promise<{ amount: number; timeInDays: number } | null> => {
  const user: UserWithSubscriptionPayDetail | null =
    await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        Order: {
          select: {
            order_status: true,
            order_expiry_time: true,
          },
        },
        ExtendedUser: {
          select: {
            phone: true,
          },
        },
        Subscription: {
          select: {
            pay: {
              select: {
                amount: true,
                timeInDays: true,
              },
            },
            expiredAt: true,
            createdAt: true,
            payId: true,
            planId: true,
          },
        },
      },
    });
  if (user?.Subscription?.planId === planName) {
    const plan: Plan = await getPlanDetails(planName).then((planRetrived) => {
      if (planRetrived === null) return null;
      return planRetrived;
    });

    return { amount: plan.amount, timeInDays: plan.timeInDays };
  }
  if (!user.Subscription.planId) {
    //   const plan: Plan = await getPlanDetails(planName).then((planRetrived) => {
    //     if (planRetrived === null) return null;
    //     return planRetrived;
    //   });
    // if(){
    // }
    return user;
  }
};

export { checkPlanForGivenUserEmail };
