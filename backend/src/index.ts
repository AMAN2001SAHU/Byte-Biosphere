import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRECT: string;
  };
  Variables: {
    userId: string;
  };
}>().basePath('/api/v1');

app.get('/', (c) => {
  return c.text('Welcome to Blog Bioshpere');
});

app.route('/user', userRouter);
app.route('/blog', blogRouter);

export default app;
