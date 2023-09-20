import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

function NationalityChecker() {

  const [name,setName] = useState('');
  const [response,setResponse] = useState({});
  const [showResult,setShowResult] = useState(false);

  const handleChange = (value) =>{
    setName(value);
  }


  const onButtonClick = () =>{
    axios.get('https://api.nationalize.io?name='+name).then(function (response) {
      // handle success
      setResponse(response);
      setShowResult(true);
    })
  }

    return ( <div>
        <h2>Nationality Checker</h2>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name of Person</Form.Label>
        <Form.Control type="text" placeholder="Alex" name="name" value={name} onChange={e=>handleChange(e.target.value)}/>
      </Form.Group>
      <Button variant="dark" onClick={onButtonClick}>Check Nationality</Button>
    </Form>
    {
      showResult && 
      <div>
        {
          response.country.map((item)=>{
            return(
              <div>{item.country_id}</div>
            )
          })
        }
      </div>
      
      
    }

    </div> );
}

export default NationalityChecker;