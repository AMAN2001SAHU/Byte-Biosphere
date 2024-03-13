import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signinInput, signupInput } from '@tomboto/blogbioshpere-common';

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRECT: string;
  };
}>();

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: 'Invalid Inputs' });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRECT);

    c.status(200);
    return c.json({ token });
  } catch (e) {
    c.status(403);
    return c.json({ message: 'Some error occured' });
  }
});

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: 'Invalid Inputs' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(404);
      return c.json({ message: 'User not found' });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRECT);

    c.status(200);
    return c.json({ token });
  } catch (e) {
    c.status(403);
    return c.json({ message: 'Some error occured' });
  }
});
