import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import EmployeeForm from '../src/components/EmployeeForm';


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EmployeeForm" element={<EmployeeForm />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div >

  );
}

export default App;
