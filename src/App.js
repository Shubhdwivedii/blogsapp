import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Pagination from './components/Pagination';

function App() {  
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
