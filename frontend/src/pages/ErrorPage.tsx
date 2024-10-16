import { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {
   return (
      <div style={{ textAlign: "center", margin: "50px" }}>
         <h1>there was an error please try again</h1>
         <Link to="/">Go to Home</Link>
      </div>
   );
};

export default ErrorPage;
