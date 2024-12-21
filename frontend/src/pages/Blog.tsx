import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "./FullBlog";
import { Spinner } from "../components/Spinner";

const Blog = () => {
  const { id } = useParams();
  const {loading,blog} = useBlog({id: id||""});
  if(loading){
    return <div><Spinner/></div>
  }
  return (
    <div>
        <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog