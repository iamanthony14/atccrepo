import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col
          xs={sidebarVisible ? 12 : 0}
          sm={sidebarVisible ? 12 : 0}
          md={sidebarVisible ? 3 : 0}
          className={`bg-secondary d-flex flex-column align-items-center py-3 ${sidebarVisible ? 'd-block' : 'd-none'}`}
        >
          <Button variant="outline-light" onClick={toggleSidebar} className="mb-3 align-self-start">
            <FaBars />
          </Button>
          {sidebarVisible && (
            <>
              <div className="text-white mb-4 align-self-center" style={{ fontSize: '2rem' }}>LOGO</div>
              <Button variant="light" className="testcasebtn">New Test Case</Button>
              <div className="text-white-50 align-self-start pl-3 mysidebar">
                <p>History</p>
                <p>Lorem Ipsum</p>
                <p>dolor sit amet</p>
                <p>consectetur</p>
              </div>
            </>
          )}
        </Col>

        <Col xs={12} md={sidebarVisible ? 9 : 12} className="bg-dark text-white">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h3 className="mb-4">Hello, how can I help you?</h3>
            <Row className="w-50 mb-4">
              <Col xs={6} className="d-flex justify-content-left mb-3">
                <Button variant="outline-light" className="w-100">Suggestion 1</Button>
              </Col>
              <Col xs={6} className="d-flex justify-content-right mb-3">
                <Button variant="outline-light" className="w-100">Suggestion 2</Button>
              </Col>
              <Col xs={6} className="d-flex justify-content-center">
                <Button variant="outline-light" className="w-100">Suggestion 3</Button>
              </Col>
              <Col xs={6} className="d-flex justify-content-center">
                <Button variant="outline-light" className="w-100">Suggestion 4</Button>
              </Col>
            </Row>
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
      {!sidebarVisible && (
        <Button
          variant="outline-light"
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: '16px',
            left: '10px',
            zIndex: 1000,
          }}
        >
          <FaBars />
        </Button>
      )}
    </Container>
  );
}

export default HomePage;
