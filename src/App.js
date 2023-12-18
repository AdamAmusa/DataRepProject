import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import MainPage from './components/MainPage';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import LoadSchedule from './components/LoadSchedule';
import { faCalendarDay,  faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//ROUTING PAGE AND NAVBAR PAGE
function App() { 
  return (
    <BrowserRouter>
    <div className="App">
      {/*Navbar Element from bootstrap*/}
       <Navbar bg="dark" data-bs-theme="dark"> 
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>{/* */}
          <Nav className="me-auto">
            {/*Creates link names that will redirect the user by clicking the buttons*/}
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href='/ViewSchedule'><FontAwesomeIcon icon={faClipboardList}/> Scheduled</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path = '/' element={<MainPage></MainPage>}></Route>{/*Establishes the root to be the main page component*/}
        <Route path ='/ViewSchedule' element={<LoadSchedule></LoadSchedule>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
