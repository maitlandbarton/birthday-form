import './App.css';
import {Routes, Route} from "react-router-dom";
import FormPage from './pages/FormPage';
import AboutPage from './pages/AboutPage';
import Submitted from './pages/Submitted';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AboutPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="/submitted" element={<Submitted />}></Route>
      </Routes>
    </div>
  );
}

export default App;
