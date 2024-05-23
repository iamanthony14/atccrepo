import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col
          xs={sidebarVisible ? 12 : 1}
          md={sidebarVisible ? 3 : 1}
          className={`bg-secondary d-flex flex-column align-items-center py-3 mysidebar ${sidebarVisible ? 'd-block' : 'd-none d-md-block'}`}
        >
          <Button variant="outline-light" onClick={toggleSidebar} className="mb-3 align-self-start">
            {sidebarVisible ? 'Hide' : 'Show'}
          </Button>
          {sidebarVisible && (
            <>
              <div className="text-white mb-4" style={{ fontSize: '2rem' }}>LOGO</div>
              <Button variant="light" className="testcasebtn">New Test Case</Button>
              <div className="text-white-50 align-self-start pl-3">
                <p>History</p>
                <p>Lorem Ipsum</p>
                <p>dolor sit amet</p>
                <p>consectetur</p>
              </div>
              <Form.Control
                type="text"
                placeholder="Username"
                className="mt-auto w-75"
              />
            </>
          )}
        </Col>

        <Col xs={12} md={sidebarVisible ? 9 : 11} className="bg-dark text-white">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h3 className="mb-4">Hello, how can I help you?</h3>
            <div className="d-flex flex-wrap justify-content-around w-75 mb-4">
              <Button variant="outline-light" className="m-2 w-25">Suggestion 1</Button>
              <Button variant="outline-light" className="m-2 w-25">Suggestion 2</Button>
              <Button variant="outline-light" className="m-2 w-25">Suggestion 3</Button>
              <Button variant="outline-light" className="m-2 w-25">Suggestion 4</Button>
            </div>
            <div className="border border-light p-4 mb-4" style={{ width: '50%', textAlign: 'center' }}>
              <div className="mb-3">Drop your file here or</div>
              <Button variant="outline-light">Browse</Button>
            </div>
            <Form className="w-50">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
              />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;