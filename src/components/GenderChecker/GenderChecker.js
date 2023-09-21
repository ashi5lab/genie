import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GenderChecker() {

    const [name, setName] = useState('');
    const [Genderresponse, setResponse] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleChange = (value) => {
        setName(value);
    }


    const onButtonClick = () => {
        axios.get('https://api.genderize.io?name=' + name).then(function (response) {
            // handle success
            debugger
            setResponse(response.data.gender);
            setShowResult(true);

        })
    }

    return (<div>
        <Row className="justify-content-md-center">
            <Col xs={4}>
                <h2>Gender Checker</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of Person</Form.Label>
                        <Form.Control type="text" placeholder="Alex" name="name" value={name} onChange={e => handleChange(e.target.value)} />
                    </Form.Group>
                    <Button variant="dark" onClick={onButtonClick}>Check Gender</Button>
                </Form>
                {
                    showResult &&
                    <div>
                        {Genderresponse}
                    </div>


                }
            </Col>
        </Row>

    </div>);
}

export default GenderChecker;