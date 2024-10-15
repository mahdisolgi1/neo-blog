import { useParams } from "react-router-dom";

const Post = () => {
   const { id } = useParams();
   return <div>post with the id of {id}</div>;
};

export default Post;
