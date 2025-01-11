import { FC } from "react";
import styles from "./NoArticlesFound.module.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

const NoArticlesFound: FC = () => {
   return (
      <div className={styles.container}>
         <h2 className={styles.header}>There's no articles to display</h2>
         <p className={styles.p}>Start by creating your article.</p>
         <Link to="/create-article">
            <Button size="md" variant="primary">
               Create Article
            </Button>
         </Link>
      </div>
   );
};

export default NoArticlesFound;
