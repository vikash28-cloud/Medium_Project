import { Appbar } from "../components/Appbar"
import { Blog } from "../hooks";
export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">


            <div className="grid grid-cols-12 px-12 pt-200 pt-12 gap-6 w-full max-w-screen-lg  ">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4">
                        Post on 2nd December 2023
                    </div>

                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>


                <div className=" col-span-4 borde p-4 ">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex min-w-full">
                        <div className="pr-2 flex  justify-center ">
                            <AvatarBlogPage name={blog.author.name} key={1} />

                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "anonymous"}
                            </div>
                            <div>
                                Radom catch prhrase to grab the attention of the reader
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>

};


function AvatarBlogPage({name}:{name:string}) {
    return <div>

        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>


    </div>
}
