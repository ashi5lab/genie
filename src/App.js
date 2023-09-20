import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headernav from './components/nav/nav';
import NationalityChecker from './components/NationalityChecker/NationalityChecker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headernav></Headernav>
      </header>
      <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={4}><NationalityChecker></NationalityChecker></Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
