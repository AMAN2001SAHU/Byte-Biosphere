import { useParams } from 'react-router-dom';
import { useBlog } from '../hooks/useBlog';
import { Content } from '../components/Content';
import { BlogSkeleton } from '../components/BlogSkeleton';
import { AppBar } from '../components/Appbar';

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || '' });

  if (loading) {
    return (
      <div>
        <AppBar />
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div>
      {blog && (
        <Content
          title={blog.title}
          content={blog.content}
          createdAt={blog.createdAt}
          author={blog.author}
          id={blog.id}
        />
      )}
    </div>
  );
};
