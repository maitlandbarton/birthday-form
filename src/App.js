import './App.css';
import {Routes, Route} from "react-router-dom";
import FormPage from './pages/FormPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AboutPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
