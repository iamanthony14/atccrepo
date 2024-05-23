import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col
          sm={collapsed ? 1 : 3}
          className={`mysidebar bg-secondary text-white d-flex flex-column p-3 ${collapsed ? 'collapsed' : ''}`}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button variant="light" onClick={toggleSidebar}>
              {collapsed ? <FaBars /> : <FaTimes />}
            </Button>
            
          </div>
          <h2 className="text-center m-0">LOGO</h2>
          {!collapsed && (
            <>
              <Button variant="light" className="w-100 my-3">New Test Case</Button>
              <nav className="flex-grow-1">
                <ul className="list-unstyled">
                  <li className="my-2"><a href="#" className="text-white">History</a></li>
                  <li className="my-2"><a href="#" className="text-white">Lorem Ipsum</a></li>
                  <li className="my-2"><a href="#" className="text-white">dolor sit amet</a></li>
                  <li className="my-2"><a href="#" className="text-white">consectetur</a></li>
                </ul>
              </nav>
              <div className="text-center mt-auto mb-2">
                <Button variant="outline-light">Username</Button>
              </div>
            </>
          )}
        </Col>
        <Col sm={collapsed ? 11 : 9} className="bg-dark text-white d-flex flex-column align-items-center justify-content-center">
          <h3>Hello, how can I help you?</h3>
          <div className="d-flex flex-wrap justify-content-center my-3">
            <Button variant="outline-light" className="m-2">Suggestion 1</Button>
            <Button variant="outline-light" className="m-2">Suggestion 2</Button>
            <Button variant="outline-light" className="m-2">Suggestion 3</Button>
            <Button variant="outline-light" className="m-2">Suggestion 4</Button>
          </div>
          <div className="my-3 w-75 text-center border border-white rounded p-5">
            <p>Drop your file here</p>
            <Button variant="light">Browse</Button>
          </div>
          <InputGroup className="mb-3 w-50">
            <Form.Control
              placeholder="Enter your text"
              aria-label="User input"
            />
            <Button variant="outline-light">Go</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
