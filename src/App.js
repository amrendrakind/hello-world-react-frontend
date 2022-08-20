import './App.css';
import { Route, Routes } from 'react-router-dom';
import Greetings from './components/greetings/Greetings';

function App() {
  return (
    <div className="screen-area">
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}
export default App;
