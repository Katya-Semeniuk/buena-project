import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <title>404 page not found</title>
      <NavLink to="/">Back to Homepage</NavLink>
    </div>
  );
};

export default NotFound;
