import { FC } from "react";
import styles from "./NotImplemented.module.scss";

const NotImplemented: FC = () => {
   return (
      <div className={styles.notImplemented}>
         <h1 className={styles.notImplementedHeader}>THIS PAGE IS NOT IMPLEMENTED</h1>
         <p className={styles.notImplementedInfo}>
            For more information, please <a href="mailto:mahdi.solgi.dev@gmail.com">contact me</a>
         </p>
      </div>
   );
};

export default NotImplemented;
