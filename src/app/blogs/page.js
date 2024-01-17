
import ChipTabs from "./tabs";
import BlogCard from "./blogcard";
import BlogHeading from "./blogheading";
import { client } from "../../../sanity/lib/client";

export const revalidate = 60 // revalidate this page every 60 seconds
const Blogs = async () =>{
const posts=await getData();
 return( 
 <section>
    <BlogHeading />
    <ChipTabs tabs={tabs} />
    <BlogCard posts={posts} />
  </section>
  )
;
}
const tabs = ["All", "Family-Friendship", "Marriage", "LifeStyle"];

const getData= async()=>{
  const query = `*[_type == "post"] {
    description,
    mainImage { asset },
    slug { current },
    title,
    publishedAt
  } | order(publishedAt asc)`;
  const data=await client.fetch(query)
  return data
}


export default Blogs;
