import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Contacts from "./Contacts";
import Addcontact from "./components/Addcontact";
import Updatecontact from "./components/Updatecontact";
function App() {
  return (
    <div>
    <BrowserRouter>
    <div>
    <Nav/>
    </div>
    <Routes>
      <Route path="/" element={<Contacts/>}/>
      <Route path="/add" element={<Addcontact/>}/>
      <Route path="/edit-contact/:id" element={<Updatecontact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
