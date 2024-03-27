import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';

interface Blog {
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string | null;
  };
  id: string;
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const token = localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1');
    try {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: 'Bearer' + ' ' + token,
          },
        })
        .then((res) => {
          setBlog(res.data.blog);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  return {
    loading,
    blog,
  };
};
