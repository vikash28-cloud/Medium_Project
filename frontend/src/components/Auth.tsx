import { SigninInput, SignupInput } from "@vikashsharma2896/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput | SigninInput>(
    type === "signup"
      ? { email: "", name: "", password: "" }
      : { email: "", password: "" }
  );

 

  async function sendRequest(){

    try {
      const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
      const jwt = await response.data.token;
      // console.log(jwt);
      localStorage.setItem("token",jwt);
      navigate("/blogs")

    } catch (error) {
      if(type==="signin"){
        alert("invalid email or password");
      }
      else{
        alert("invalid credentials")
      }
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className=" flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-4xl font-bold ">{type==="signup"?"Create An Account":"Log in Yourself"}</div>
            <div className="text-slate-400">
              {type==="signup"?"Already have an account?":"Don't Have an Account"}
              <Link to={type==="signup"?"/signin":"/signup"} className="underline">
                {type==="signup"?"Log In":"SignUp"}
              </Link>
            </div>
          </div>
          <div className="mt-4">

            {type==="signup"?
            <LabelledInput
              label="Name"
              placeholder="vikash"
              onchange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />

:null}
            <LabelledInput
              label="Email"
              placeholder="vikash@gmail.com"
              onchange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="vikash"
              onchange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <button
            onClick={sendRequest}
              type="button"
              className="text-white mt-8 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              {type==="signup"?"Sign up":"Log in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  onchange,
  placeholder,
  type,
}: LabelledInputType) {
  return (
    <div className="p-2">
      <label className="block mb-2 text-md text-black font-bold">
        {label}
      </label>
      <input
        onChange={onchange}
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
