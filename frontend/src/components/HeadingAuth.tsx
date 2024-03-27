import { Link } from 'react-router-dom';

export const HeadinAuth = ({ type }: { type: 'signup' | 'signin' }) => {
  return (
    <div className="px-3">
      <div className="text-4xl font-bold">
        {type === 'signin' ? ' Login' : 'Create an account'}
      </div>
      <div className="text-lg mt-3 font-light text-center text-slate-400">
        {type === 'signin'
          ? " Don't have an account?"
          : 'Already have an account?'}
        <Link
          to={type === 'signin' ? '/signup' : '/signin'}
          className="underline underline-offset-2 ml-1"
        >
          {type === 'signin' ? 'Sign Up' : 'Login'}
        </Link>
      </div>
    </div>
  );
};
