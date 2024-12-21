import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return <>
    <div className="border-b flex justify-between px-10 py-4">
      <Link to="/">
      <div className=" text-lg flex flex-col justify-center">Medium</div>
    </Link>
    
    <div>
      <Link to={"/publish"}>
    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 me-4  ">New +</button>
    </Link>
      <Avatar name="Vikash" />
    </div>
  </div >
  
  </>

    
  
};
