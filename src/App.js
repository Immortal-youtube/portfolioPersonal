
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Counter from './components/counter';
import About from './components/about';

import "./components/icons/font"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
