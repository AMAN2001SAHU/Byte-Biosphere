import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';
import { adminRouter } from './routes/admin';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRECT: string;
  };
  Variables: {
    userId: string;
  };
}>().basePath('/api/v1');

app.use('*', cors());

app.get('/', (c) => {
  return c.text('Welcome to Blog Bioshpere');
});

app.route('/user', userRouter);
app.route('/blog', blogRouter);
app.route('/admin', adminRouter);

export default app;
