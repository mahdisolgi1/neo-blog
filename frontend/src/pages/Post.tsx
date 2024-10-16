import { FC } from "react";
import { useParams } from "react-router-dom";

const Post: FC = () => {
   const { id } = useParams();
   return <div>post with the id of {id}</div>;
};

export default Post;
