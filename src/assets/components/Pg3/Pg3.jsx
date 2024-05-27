import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { ListGroup, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Pg3.css";

function Pg3({ prev, handleClose }) {
  const { firstName, lastName, email, phone, salary } = useContext(FormContext);
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="d-flex">
          <p className="me-2 text-uppercase">First Name:</p>
          <p className="text-primary">{firstName}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2  text-uppercase">Last Name:</p>
          <p className="text-primary">{lastName}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2  text-uppercase">Email:</p>
          <p className="text-primary">{email}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2  text-uppercase">Phone:</p>
          <p className="text-primary">{phone}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2  text-uppercase">Salary:</p>
          <p className="text-primary">{salary}</p>
        </ListGroup.Item>
      </ListGroup>
      <div className="d-flex justify-content-center mt-4">
        <Button className="me-4" type="button" onClick={() => prev()}>
          Back
        </Button>
        <Button
          className="navlink-white"
          type="button"
          onClick={() => handleClose()}
        >
          <NavLink className="navlink-white" to="/account">
            Confirm
          </NavLink>
        </Button>
      </div>
    </>
  );
}

export default Pg3;
