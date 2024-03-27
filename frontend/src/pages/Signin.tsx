import { Quote } from '../components/Quote';
import { SiginInput } from '@tomboto/blogbioshpere-common';
import { useState } from 'react';
import { LabelledInput } from '../components/LabelledInputType';
import { Button } from '../components/Button';
import { HeadinAuth } from '../components/HeadingAuth';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SiginInput>({
    email: '',
    password: '',
  });

  async function sendReq() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const jwt = res.data.token;
      localStorage.setItem('token', JSON.stringify(jwt));
      navigate('/blogs');
    } catch (e) {
      // Tell about the error to user
      toast('Invalid Inputs');
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex justify-center flex-col max-w-3xl min-w-80 text-center">
            <HeadinAuth type={'signin'} />
            <div className="text-left">
              <LabelledInput
                label="Email"
                placeholder="Enter Email"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    email: e.target.value,
                  });
                }}
              />
              <LabelledInput
                label="Password"
                placeholder="Enter Password"
                type={'password'}
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <Button onClick={sendReq} text={'Login'} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
