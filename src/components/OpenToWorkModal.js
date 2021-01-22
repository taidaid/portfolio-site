import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

const OpenToWorkModal = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Open To Work</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            Welcome and thanks for visiting! I wanted to let you know that I'm
            actively looking for new work. Please feel free to contact me!
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default OpenToWorkModal;
