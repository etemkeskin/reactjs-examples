import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Breadcrumb,
  Button,
  Card,
  Form,
  Container,
  Col,
} from "react-bootstrap";

const BootstrapExamples = () => {
  return (
    <div style={{'background': '#e3e2df'}}>
      <Container>
        <h3>Bootstrap Examples</h3> 
        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Form className="mx-auto mb-4 p-4" 
        style={{'max-width' : '500px', 'border':'1px solid #546184'}}>
          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="etemkeskin@yahoo.com" />
              <Form.Text className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                totam ipsa?
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
              <Form.Text className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                totam ipsa?
              </Form.Text>
            </Form.Group>
          </Col>

          <Button variant="secondary">Subscribe</Button>
        </Form>
        <Card className="mx-auto mb-3" style={{ "max-width": "300px" }}>
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              deserunt eos illo dolores eius numquam dicta. Illum nihil
              provident eligendi porro, aut, magnam necessitatibus dolores
              impedit expedita, ducimus quasi vel!
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Col className="m-5">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="dark">Dark</Button>
        </Col>
        
        <Col className="m-5">
          <Alert variant="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum laudantium iusto veritatis tempore adipisci vero hic, 
          et quia excepturi deleniti ducimus ratione. Error quibusdam inventore corrupti officia nemo nam?</Alert>
        </Col>
        <br />
      </Container>
    </div>
  );
};

export default BootstrapExamples;
