import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Publish } from './pages/Publish';
// import { BlogsSkeleton } from './components/BlogsSkeleton';
import { BlogSkeleton } from './components/BlogSkeleton';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/Skeleton" element={<BlogSkeleton />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
