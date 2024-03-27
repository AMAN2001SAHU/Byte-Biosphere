import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export const Main = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <img src={Logo} alt="" className="w-auto h-16 mb-5" />

        <div className="flex justify-between px-20 min-w-full">
          <Link to={'/signin'}>
            <button className="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full  mt-4">
              Signin
            </button>
          </Link>
          <Link to={'/signup'}>
            <button className="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-4">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
