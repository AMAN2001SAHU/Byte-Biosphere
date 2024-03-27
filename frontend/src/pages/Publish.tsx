import { useState } from 'react';
import { AppBar } from '../components/Appbar';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export const Publish = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <div className="flex justify-center mt-5 px-10">
        <div className="max-w-4xl w-full">
          <div>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-4xl focus:outline-none h-fit"
              placeholder="Title"
            />
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              rows={4}
              className="mt-3 p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button
              onClick={async () => {
                const token = localStorage
                  .getItem('token')
                  ?.replace(/^"(.*)"$/, '$1');
                const res = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    content,
                  },
                  {
                    headers: {
                      Authorization: 'Bearer' + ' ' + token,
                    },
                  }
                );
                navigate(`/blog/${res.data.id}`);
              }}
              className="mt-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Publish post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
