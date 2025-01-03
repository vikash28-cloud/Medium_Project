import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  return <Link to={`/blog/${id}`} >
        <div className=" p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
          <div className="flex">
            <Avatar name={authorName}/>
            <div className="font-extralight pl-2 text-sm">{authorName}</div>
            <div className="flex justify-center flex-col pl-2">
              <Circle/>
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
              {publishedDate}
            </div>
          </div>

          <div className="tetx-xl font-semibold pt-2">{title}</div>
          <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
          <div className="text-slate-400 text-sm font-thin pt-4">
            {Math.ceil(content.length / 100) + " Minutes / Read "}
          </div>
        </div>
  </Link>
};

export function Avatar({ name }: { name: string}) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full ">
      <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

function Circle() {
  return (
    <div>
      <div className="h-1 w-1 rounded-full bg-slate-500 "></div>
    </div>
  );
}