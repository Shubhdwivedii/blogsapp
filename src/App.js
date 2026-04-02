import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const { fetchBlogs } = useContext(AppContext);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-","");
      fetchBlogs(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-","");
      fetchBlogs(Number(page), category);
    }
    else{
      fetchBlogs(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  );
}

export default App;
