import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Nav from './Component/Nav';
import Resume from './Component/Resume';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element = {<Navigate replace to = '/home'/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/resume' element = {<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
