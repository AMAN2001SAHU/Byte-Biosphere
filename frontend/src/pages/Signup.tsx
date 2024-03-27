import { Quote } from '../components/Quote';
import { SigupInput } from '@tomboto/blogbioshpere-common';
import { useState } from 'react';
import { LabelledInput } from '../components/LabelledInputType';
import { Button } from '../components/Button';
import { HeadinAuth } from '../components/HeadingAuth';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SigupInput>({
    name: '',
    email: '',
    password: '',
  });

  async function sendReq() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const jwt = res.data.token;
      localStorage.setItem('token', JSON.stringify(jwt));
      navigate('/blogs');
    } catch (e) {
      // alert the user here that the req has failed
      toast('Invalid Inputs');
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex justify-center flex-col max-w-3xl min-w-80 text-center">
            <HeadinAuth type={'signup'} />
            <div className="text-left">
              <LabelledInput
                label="Name"
                placeholder="Enter Name"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />

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
            <Button onClick={sendReq} text={'Sign Up'} />
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
