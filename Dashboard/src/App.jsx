import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from "./components/Home";
import Signup from './Auth/Signup';
import Login from './Auth/Login';

function App() {

  return (
  <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </>
  )
}

export default App
