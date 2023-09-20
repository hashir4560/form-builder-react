import React from "react";
import "./App.css";
import FormBuilder from "./components/FormBuilder";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <FormBuilder />
      <ToastContainer/>
    </div>
  );
}

export default App;
