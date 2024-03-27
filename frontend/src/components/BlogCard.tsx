import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';
import { Circle } from './Circle';

interface blogCardProps {
  title: string;
  content: string;
  authorName: string | null;
  publishedDate: string;
  id: string;
}

export const BlogCard = ({
  title,
  content,
  authorName,
  publishedDate,
  id,
}: blogCardProps) => {
  let nameArr: string[];
  if (authorName === null) {
    nameArr = ['User'];
  } else {
    nameArr = authorName.split(' ');
  }
  return (
    <div className="">
      <Link to={`/blog/${id}`}>
        <div className="flex gap-1 items-center text-sm mb-2">
          <Avatar
            intials={`
          ${
            nameArr.length > 1
              ? `
                ${nameArr[0].charAt(0).toUpperCase()} 
                ${nameArr[1].charAt(0).toUpperCase()}
                `
              : `${nameArr[0].charAt(0).toUpperCase()}`
          }
          `}
          />
          <span className="font-medium">
            {authorName === null ? 'User' : authorName}
          </span>
          <div>
            <Circle />
          </div>
          <span className="font-light text-slate-400"> {publishedDate} </span>
        </div>
        <div className="mb-4">
          <div className="font-bold text-xl">{title}</div>
          <div>
            {content.slice(0, 150) + (content.length > 100 ? '...' : null)}
          </div>
        </div>
        <div className="text-slate-400 text-sm">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
        <div className="border-b-2 mt-5"></div>
      </Link>
    </div>
  );
};
