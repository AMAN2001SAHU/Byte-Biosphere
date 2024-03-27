import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export const adminRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRECT: string;
  };
  Variables: {
    userId: string;
  };
}>();

adminRouter.post('/blog/delete', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.post.deleteMany({});

    return c.json({ message: 'Success' });
  } catch (e) {
    if (e) console.error(e);
    c.status(404);
    return c.json({ error: 'Some error occured' });
  }
});

adminRouter.post('/user/delete', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.user.deleteMany({
      where: {
        name: null,
      },
    });

    return c.json({ message: 'Success' });
  } catch (e) {
    if (e) console.error(e);
    c.status(404);
    return c.json({ error: 'Some error occured' });
  }
});
