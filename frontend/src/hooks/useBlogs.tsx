import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';

interface Blogs {
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string | null;
  };
  id: string;
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`).then((res) => {
      setBlogs(res.data.blogs);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    blogs,
  };
};
