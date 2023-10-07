
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Counter from './components/counter';
import About from './components/about';
import MyProject from './components/myprojects';
import Blogs from './components/blogs';

import "./components/icons/font"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path="/myprojects" element={<MyProject />} />
        <Route path="/blogs" element={<Blogs/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
