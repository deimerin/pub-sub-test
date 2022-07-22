import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return(    

  <Container className="p-3">
  <Container className="p-5 mb-4 bg-light rounded-3">
    <h1 className="header">MQTT Publisher 1</h1>
    <Form>
      <InputGroup>
        <InputGroup.Text>Topico 1</InputGroup.Text>
          <Form.Control as="textarea"/>
      </InputGroup>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" type="submit">
          Send
        </Button>
      </div>
    </Form>
  
  </Container>
  </Container>

    );
  }
  
  export default App;
  