import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function NationalityChecker() {

  const [name, setName] = useState('');
  const [Countryresponse, setResponse] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleChange = (value) => {
    setName(value);
  }


  const onButtonClick = () => {
    axios.get('https://api.nationalize.io?name=' + name).then(function (response) {
      // handle success
      setResponse(response.data.country);
      console.log("data", Countryresponse)
      setShowResult(true);

    })
  }

  return (<div>
      <Row className="justify-content-md-center">
      <Col xs={4}>
    <h2>Nationality Checker</h2>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name of Person</Form.Label>
        <Form.Control type="text" placeholder="Alex" name="name" value={name} onChange={e => handleChange(e.target.value)} />
      </Form.Group>
      <Button variant="dark" onClick={onButtonClick}>Check Nationality</Button>
    </Form>
    {
      showResult &&
      <div>
        <h2>Result</h2>
        <ListGroup as="ol" numbered>
          {
            Countryresponse.map(res =>
              <div key={res.country_id}>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{res.country_id}</div>
                  </div>
                  <Badge bg="primary" pill>
                    {res.probability}
                  </Badge>
                </ListGroup.Item>
              </div>)
          }
        </ListGroup>
      </div>


    }
    </Col>
     </Row>

  </div>);
}

export default NationalityChecker;