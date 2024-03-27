import { SigupInput } from '@tomboto/blogbioshpere-common';
import { useState } from 'react';
import { LabelledInput } from './LabelledInputType';
import { Button } from './Button';
import { HeadinAuth } from './HeadingAuth';

export const Auth = ({ type }: { type: 'signup' | 'signin' }) => {
  const [postInputs, setPostInputs] = useState<SigupInput>({
    name: '',
    email: '',
    password: '',
  });
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center flex-col max-w-3xl min-w-80 text-center">
        <HeadinAuth type={type} />
        <div className="text-left">
          {type === 'signup' ? (
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
          ) : null}

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
        <Button text={type === 'signup' ? 'Sign Up' : 'Login'} />
      </div>
    </div>
  );
};
