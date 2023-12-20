import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import MainPage from './components/MainPage';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import LoadSchedule from './components/LoadSchedule';
import { faCalendarDay,  faClipboardList, faQuestion, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Change from './components/change';
import About from './components/About';

//ROUTING PAGE AND NAVBAR PAGE
function App() { 
  return (
    <BrowserRouter>
    <div className="App">
      {/*Navbar Element from bootstrap*/}
       <Navbar bg="dark" data-bs-theme="dark"> 
        <Container>
          <Navbar.Brand href="/">Schedule.io</Navbar.Brand>{/* */}
          <Nav className="me-auto">
            {/*Creates link names that will redirect the user by clicking the buttons*/}
            <Nav.Link href="/"><FontAwesomeIcon icon={faCalendarDays}/>schedule</Nav.Link> {/*Link for home page */}
            <Nav.Link href='/ViewSchedule'><FontAwesomeIcon icon={faClipboardList}/> myList</Nav.Link> {/*Link for schedule viewing page */}
            <Nav.Link href='/About'><FontAwesomeIcon icon={faQuestion} /> About</Nav.Link>{/*Link for about page */}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path = '/' element={<MainPage></MainPage>}></Route>{/*Establishes the root path to be the main page component*/}
        <Route path ='/ViewSchedule' element={<LoadSchedule></LoadSchedule>}></Route>
        <Route path = '/change/:id' element={<Change></Change>}></Route>
        <Route path = '/About' element={<About></About>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
