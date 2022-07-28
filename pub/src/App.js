import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import mqtt from 'precompiled-mqtt';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const URL = 'ws://159.223.134.18:1888'

  const clientOptions = {
    clientId: 'PUB1'
  }
  
  const inputMessage = useRef(null);
  const client = mqtt.connect(URL, clientOptions);

  function sendMessage(){
    
    client.publish('TOPIC1', inputMessage.current.value);
    toast(`Message sent: ${inputMessage.current.value}`)
    inputMessage.current.value = '';
    
  }

  return(

  <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">MQTT Publisher 1</h1>
    <Form>

      <InputGroup>
        <InputGroup.Text>Topic 1</InputGroup.Text>
          <Form.Control placeholder='Message' as="textarea" ref={inputMessage}/>
      </InputGroup>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={sendMessage}>
          Send
        </Button>
      </div>
      <ToastContainer/>

    </Form>
  
  </Container>
  </Container>
  
    );
  }
  
  export default App;
  