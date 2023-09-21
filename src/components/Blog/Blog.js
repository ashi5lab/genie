import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Blog() {

    const [name, setName] = useState('');
    const [responsedata, setResponse] = useState([]);
    const [showResult, setShowResult] = useState(false);



    useEffect (() => {
        axios.get('https://baconipsum.com/api/?type=all-meat&paras=5&start-with-lorem=1&format=text').then(function (response) {
            // handle success
            debugger
            setResponse(response.data);
            setShowResult(true);

        })
    },[])

    return (<div>
        <Row className="justify-content-md-center">
            <Col xs={8}>
                <h2>Title of Blog</h2>
                <Row>
                    <Col xs={6} md={4}>
                        <Image height={'100%'} width={'100%'} src="https://placehold.co/600x400" rounded />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        {showResult && responsedata}
                    </Col>
                </Row>

            </Col>
        </Row>
    </div>);
}

export default Blog;