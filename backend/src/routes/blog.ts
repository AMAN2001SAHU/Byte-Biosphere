import { Hono } from 'hono';
import { decode, sign, verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {
  createBlogInput,
  updateBlogInput,
} from '@tomboto/blogbioshpere-common';

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRECT: string;
  };
  Variables: {
    userId: string;
    // prisma: string;
  };
}>();

// blogRouter.use('*', (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//   c.set('prisma', prisma);
// });

/***************************** Get all Blogs *****************************************/

blogRouter.get('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany();

    return c.json({ blogs });
  } catch (e) {
    c.status(404);
    return c.json({ error: 'No Blogs Available' });
  }
});

/***************************** Auth Middleware *****************************************/

blogRouter.use('/*', async (c, next) => {
  const jwt = c.req.header('Authorization') || '';
  if (!jwt) {
    c.status(401);
    return c.json({ error: 'unauthorized' });
  }
  const token = jwt.split(' ')[1];

  const verification = await verify(token, c.env.JWT_SECRECT);

  if (!verification) {
    c.status(403);
    return c.json({ error: 'Unauthorized' });
  }
  c.set('userId', verification.id);
  await next();
});

/***************************** Post new Blog *****************************************/

blogRouter.post('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get('userId');

  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: 'Invalid Inputs' });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({
      id: post.id,
    });
  } catch (e) {
    c.status(404);
    return c.json({ error: e });
  }
});

/***************************** Edit the Blog *****************************************/

blogRouter.put('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get('userId');
  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: 'Invalid Inputs' });
  }

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: body.id,
      },
    });

    if (!blog) {
      c.status(404);
      return c.json({ error: 'Could not find the blog' });
    }

    if (blog.authorId != userId) {
      c.status(403);
      return c.json({ error: 'Unauthorized' });
    }

    await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.text('Updated Post');
  } catch (e) {
    c.status(404);
    return c.json({ error: e });
  }
});

/***************************** Get specific Blog *************************************/

blogRouter.get('/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogId = c.req.param('id');
  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId,
      },
    });

    return c.json({ blog });
  } catch (e) {
    c.status(404);
    return c.json({ error: 'Could not find the blog' });
  }
});
