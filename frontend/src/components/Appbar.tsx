import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { Avatar } from './Avatar';

export const AppBar = () => {
  return (
    <div className="border-b-2 flex justify-between px-10 py-2 ">
      <div className="">
        <Link to={'/blogs'}>
          <img src={Logo} alt="" className="w-auto h-8" />
        </Link>
      </div>

      <div>
        <div className="flex items-center gap-2 ">
          <div>
            <Link to={'/publish'}>
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                New Blog
              </button>
            </Link>
          </div>
          <div className="mb-1">
            <Avatar intials="A" />
          </div>
        </div>
      </div>
    </div>
  );
};
