import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NationalityChecker from './components/NationalityChecker/NationalityChecker';
import Container from 'react-bootstrap/Container';
import Home from './components/Home/Home';
import GenderChecker from './components/GenderChecker/GenderChecker';
import Headernav from './components/nav/nav';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Headernav/>
      <Container fluid>
        <BrowserRouter>
	  <Routes>
    <Route exact path='/' element={<NationalityChecker/>}/> 
		<Route path='/nationality' element={<NationalityChecker/>}/> 
		<Route path="/gender" element={<GenderChecker />}></Route>
    <Route path="/blog" element={<Blog />}></Route>	
	</Routes>
    </BrowserRouter>
    </Container>
  </div>
  );
}

export default App;
