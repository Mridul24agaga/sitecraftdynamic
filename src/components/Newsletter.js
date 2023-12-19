import React, { useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const clearFields = () => {
    // You can add any cleanup logic here if needed
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12}>
            <h3>"Elevate Your Online Presence, Crafting Digital Excellence for Your Success!"</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
        </Row>
      </div>
    </Col>
  );
}
