

import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <div style={{ textAlign: "center", margin: "50px" }}>
         <h1>404 - Not Found</h1>
         <p>The page you're looking for does not exist.</p>
         <Link to="/">Go to Home</Link>
      </div>
   );
};

export default NotFound;
