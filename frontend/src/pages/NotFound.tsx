import { Link } from "react-router-dom";
import { FC } from "react";
import styles from "./NotFound.module.scss";
import Button from "@/components/Button";
const NotFound: FC = () => {
   return (
      <div className={styles.container}>
         <h2 className={styles.header}>404 - Not Found</h2>
         <p className={styles.p}>The page you're looking for does not exist.</p>
         <Link to="/">
            <Button size="md" variant="primary">
               Go to Home
            </Button>
         </Link>
      </div>
   );
};

export default NotFound;
