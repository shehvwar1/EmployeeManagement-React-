import logo from './logo.svg';
import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddEmployee from './Employees/AddEmployee';
 import EditEmployee from './Employees/EditEmployee';
 import UpdateEmployee from './Employees/UpdateEmployee';
import ViewEmployee from './Employees/ViewEmployee';

function App() {
  return (
   <div>
    <Router>
   <Navbar></Navbar>
   <Routes>
      <Route exact path = "/" element={<Home/>} />
      <Route exact path = "/addEmployee" element={<AddEmployee/>} />
      <Route exact path='/updateRecord/:employeeId' element={EditEmployee}/>
      <Route exact path='updateEmployee/:employeeId' element={<UpdateEmployee/>} />
      <Route exact path='viewEmployee/:employeeId' element={<ViewEmployee/>} />
      {/* <Route path = "/editEmployee/:employeeId" element={<EditEmployee/>} /> */}
   </Routes>
   </Router>
   </div>
  );
}

export default App;
