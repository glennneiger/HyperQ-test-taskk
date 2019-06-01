import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './UserInfoModal.css';
const UserInfoModal = props => {
  const {
    modal,
    modalToggle,
    name,
    username,
    email,
      phone,
    address,
  } = props;
  const {  city, street} = address;
  return (
    <Modal isOpen={modal} toggle={modalToggle}>
      <ModalBody>

        <ListGroup>
          <ListGroupItem className="user-list-item">
            <strong>Name</strong> <span>{name}</span>
          </ListGroupItem>
          <ListGroupItem className="user-list-item">
            <strong>UserName</strong> <span>{username}</span>
          </ListGroupItem>
          <ListGroupItem className="user-list-item">
            <strong>Email</strong> <span>{email}</span>
          </ListGroupItem>
          <ListGroupItem className="user-list-item">
            <strong>Phone</strong> <span>{phone}</span>
          </ListGroupItem>
            <ListGroupItem className="user-list-item">
            <strong>City</strong> <span>{city}</span>
          </ListGroupItem>
          <ListGroupItem className="user-list-item">
            <strong>Street</strong> <span>{street}</span>
          </ListGroupItem>
        </ListGroup>
      </ModalBody>
      <ModalFooter>
        <Button size="lg" block color="warning" onClick={modalToggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

UserInfoModal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
  modal: PropTypes.bool.isRequired,
  modalToggle: PropTypes.func.isRequired,
};

export default UserInfoModal;
