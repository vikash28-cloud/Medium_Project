import { Link } from "react-router-dom";

const Auth = ({ type }: { type: "signin || signup" }) => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className=" flex justify-center">
        <div>
          <div className="text-4xl font-bold ">
            Create an Account
        </div>
        <div className="text-slate-400"> 
            Already have an account?
            <Link to={"/signin"} className="underline">Login</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
