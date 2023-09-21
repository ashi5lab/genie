import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NationalityChecker from './components/NationalityChecker/NationalityChecker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home/Home';
import GenderChecker from './components/GenderChecker/GenderChecker';
import Headernav from './components/nav/nav';

function App() {
  return (
    <div>
      <Headernav/>
      <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={4}>
        <BrowserRouter>
	  <Routes>
    <Route exact path='/' element={<NationalityChecker/>}/> 
		<Route path='/nationality' element={<NationalityChecker/>}/> 
		<Route path="/gender" element={<GenderChecker />}></Route>	
	</Routes>
    </BrowserRouter>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default App;
