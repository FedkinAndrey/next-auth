'use server';

import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';
import { SettingsSchema } from '@/schemas';
import * as z from 'zod';

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const dbUser = await getUserById(user.id);
};
