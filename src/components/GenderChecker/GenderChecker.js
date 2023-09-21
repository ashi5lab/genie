import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

function GenderChecker() {

  const [name,setName] = useState('');
  const [Countryresponse,setResponse] = useState([]);
  const [showResult,setShowResult] = useState(false);

  const handleChange = (value) =>{
    setName(value);
  }


  const onButtonClick = () =>{
    axios.get('https://api.genderize.io?'+name).then(function (response) {
      // handle success
      debugger
      setResponse(response.data.country);
      console.log("data",Countryresponse)
      setShowResult(true);
   
    })
  }

    return ( <div>
        <h2>Gender Checker</h2>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name of Person</Form.Label>
        <Form.Control type="text" placeholder="Alex" name="name" value={name} onChange={e=>handleChange(e.target.value)}/>
      </Form.Group>
      <Button variant="dark" onClick={onButtonClick}>Check Gender</Button>
    </Form>
    {
      showResult && 
      <div>
        {
          Countryresponse.map(res => <div key={res.country_id}
            >{res.country_id}</div>)
        }
      </div>
      
      
    }

    </div> );
}

export default GenderChecker;