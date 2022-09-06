import {useQuery , useQueryClient} from "react-query"
import BlogList from "./BlogList";

const fetchBlogs= async ()=>{
    const res=await fetch("http://localhost:8000/blogs");
    return res.json()
}


const Query = () => {
    
//Access the client which will send the queries to the api endpoint
    const queryClient=useQueryClient();
    const {data:blogs,status}=useQuery("blogs",fetchBlogs);//Queries
//console.log(data.results);
    return ( 
        <div className="itemquery">
      

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

{status==="success" && <BlogList  blog={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Query;