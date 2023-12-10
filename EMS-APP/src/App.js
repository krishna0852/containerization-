//import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
//import browser router after installing react router dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
//created this react project using npx create-react-app .
function App() {
  return (
    <div className="App">
      
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/addUser" element={<AddUser/>}></Route>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/viewuser/:id" element={<ViewUser/>}></Route>
      </Routes>
     </Router>
     

    </div>
  );
}

export default App;
