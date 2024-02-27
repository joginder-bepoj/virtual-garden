import { Routes,Route  } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import AdminRoutes from "./Admin/AdminRoutes/AdminRoutes";
import UserRoutes from "./User/UserRoutes/UserRoutes";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (  
  <>
       <ScrollToTop />
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/admin/*' element={<AdminRoutes/>}/>
             <Route path='/user/*' element={<UserRoutes/>}/>
        </Routes>
  </>
  );
}

export default App;
