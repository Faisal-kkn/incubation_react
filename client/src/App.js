import './App.css';
import { Route, Routes } from "react-router-dom";
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Admin/Home';
import AdminLogin from './Pages/Admin/Login';
import Application from './Pages/User/Application';
import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import Nocomponent from './Pages/Nocomponent';



function App() {
  return (
    <div>

      <Routes>
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/' element={<Application />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Routes>
        <Route path='/admin' exact element={<Admin  />} >
          <Route path='/admin/home' element={<Home />} />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path='*' exact={true} component={Nocomponent} />

        <Route path='*' element={<Nocomponent />} />
      </Routes> */}
    </div>
  );
}

export default App;
