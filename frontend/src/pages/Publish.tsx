import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import {useNavigate } from "react-router-dom"

export const Publish = () => {
     const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    async function SubmitBlogPost() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog/createBlog`,{
            title,
            content
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`)

    }
    return <div>
        <Appbar />
        
            <div className="flex justify-center mt-4">

                <div className="max-w-screen-lg w-full">

                    <input type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" name="title" onChange={(e)=>{
                        setTitle(e.target.value)
                    }} />
                    <div className="mt-4 ">
                        <div className="w-full mb-4 border">
                            <div className="flex items-center  justify-between px-3 py-2 border-b">
                                <div className="px-4 py-2 bg-white rounded-b-lg w-full">
                                    <label htmlFor="editor" className="sr-only">Publish post</label>
                                    <textarea onChange={(e)=>{
                                            setContent(e.target.value)
                                    }}  id="editor" rows={9} className="block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0 " placeholder="Write Content ..." required ></textarea>
                                </div>
                            </div>
                        </div>
                        <button onClick={SubmitBlogPost}  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-green-800">
                            Publish post
                        </button>
                    </div>


                </div>

            </div>
      
    </div>
}

