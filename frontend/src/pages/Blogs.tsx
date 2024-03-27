import { AppBar } from '../components/Appbar';
import { BlogCard } from '../components/BlogCard';
import { BlogsSkeleton } from '../components/BlogsSkeleton';
import { useBlogs } from '../hooks/useBlogs';

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <div>
          <AppBar />
        </div>
        <BlogsSkeleton />
        <BlogsSkeleton />
        <BlogsSkeleton />
      </div>
    );
  }

  interface Author {
    name: string | null;
  }

  interface BlogProps {
    title: string;
    content: string;
    createdAt: string;
    author: Author;
    id: string;
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center p-5">
        <div className="flex justify-center flex-col max-w-xl lg:max-w-4xl gap-4 w-full">
          {blogs.map((blog: BlogProps) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate={extractedDate(blog.createdAt)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function extractedDate(createdAt: string): string {
  const date = new Date(createdAt);
  const monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year: number = date.getFullYear();
  const monthIndex: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string = monthNames[monthIndex];

  return `${day.toString().padStart(2, '0')} ${monthName}, ${year}`;
}
