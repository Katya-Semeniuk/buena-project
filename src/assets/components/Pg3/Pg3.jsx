// import { useContext } from "react";
// import FormContext from "../formcontext/form.context";
// // import { Link } from "react-router-dom";
// import { ListGroup } from "react-bootstrap";

// function Pg3() {
//   const { firstName, lastName, email, phone, salary } = useContext(FormContext);
//   return (
//     <ListGroup>
//       <ListGroup.Item className="d-flex">
//         <p className="me-2">First Name</p>
//         <p>{firstName}</p>
//       </ListGroup.Item>
//       <ListGroup.Item className="d-flex">
//         <p className="me-2">Second Name</p>
//         <p>{lastName}</p>
//       </ListGroup.Item>
//       <ListGroup.Item className="d-flex">
//         <p className="me-2">Email</p>
//         <p>{email}</p>
//       </ListGroup.Item>
//       <ListGroup.Item className="d-flex">
//         <p className="me-2">Phone</p>
//         <p>{phone}</p>
//       </ListGroup.Item>
//       <ListGroup.Item className="d-flex">
//         <p className="me-2">Salary</p>
//         <p>{salary}</p>
//       </ListGroup.Item>
//     </ListGroup>
//   );
// }

// export default Pg3;

import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Link } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";

function Pg3({ prev, handleClose }) {
  const { firstName, lastName, email, phone, salary } = useContext(FormContext);
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="d-flex">
          <p className="me-2">First Name</p>
          <p>{firstName}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2">Last Name</p>
          <p>{lastName}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2">Email</p>
          <p>{email}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2">Phone</p>
          <p>{phone}</p>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex">
          <p className="me-2">Salary</p>
          <p>{salary}</p>
        </ListGroup.Item>
      </ListGroup>
      <Button type="button" onClick={() => prev()}>
        Back
      </Button>

      <Button type="button" onClick={() => handleClose()}>
        <Link to="/account">Confirm</Link>
      </Button>
    </>
  );
}

export default Pg3;
