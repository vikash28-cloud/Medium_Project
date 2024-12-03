import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return <div>
    <Appbar/>
    <div className=" flex justify-center">
      <div className="max-w-xl ">
        <BlogCard
          authorName={"vikash sharma"}
          title={"Metaverse is chnaging the world"}
          content={
            "fjejfoiejf oeife ioef oiejf oirfru foiru oru ofireufoirijf rufoirj foiewrjfoieju oru ofireufoirijf rufoirj foiewrjfoiej fiej oie"
          }
          publishedDate={"28/09/2002"}
        />
        <BlogCard
          authorName={"vikash sharma"}
          title={"Metaverse is chnaging the world"}
          content={
            "fjejfoiejf oeife ioef oiejf oirfru foiru oru ofireufoirijf rufoirj foiewrjfoieju oru ofireufoirijf rufoirj foiewrjfoiej fiej oie"
          }
          publishedDate={"28/09/2002"}
        />
        <BlogCard
          authorName={"vikash sharma"}
          title={"Metaverse is chnaging the world"}
          content={
            "fjejfoiejf oeife ioef oiejf oirfru foiru oru ofireufoirijf rufoirj foiewrjfoieju oru ofireufoirijf rufoirj foiewrjfoiej fiej oie"
          }
          publishedDate={"28/09/2002"}
        />
        <BlogCard
          authorName={"vikash sharma"}
          title={"Metaverse is chnaging the world"}
          content={
            "fjejfoiejf oeife ioef oiejf oirfru foiru oru ofireufoirijf rufoirj foiewrjfoieju oru ofireufoirijf rufoirj foiewrjfoiej fiej oie"
          }
          publishedDate={"28/09/2002"}
        />
      </div>
    </div>
    </div>
};

export default Blogs;
