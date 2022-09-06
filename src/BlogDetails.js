import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";


//we use useParams hooks to get the id from the router and use it in the custom hook
//the same conditional templates of loading errors and jsx is used to represent the states.
const BlogDetails = () => {
    const {id}=useParams();//the id is part of the url parameter sent from BlogLists
    const {data:blog,load,error}=useFetch("http://localhost:8000/blogs/"+id);//only  fetch the particular id blog.
const history=useHistory();
// console.log(blog);//as the fetch api is an async method hence the blog is null initially. thats why we extract the blog 
//obj when we have fetch executed within the return statements.
// const author=blog.author;
    return ( 
        
         <div className="blogdetails">
            
{error && <div>{error}</div>}
{load && <div>Loading...</div>}
{blog && <div className="details">
<h2>{blog.title}</h2>
<p><em>Written by {blog.author}</em></p>
<article>
    {blog.body}
    {/* {console.log(blog)} */}
</article>

<span className="delete" onClick={()=>{
    const author=blog.author;

if(window.confirm("Do you wanna delete the blog written by "+author)){
    fetch("http://localhost:8000/blogs/"+id,{
        method:"DELETE"
    }).then(()=>{
    console.log("deleted");
    history.push("/");}
    )
    }
}

}>Delete</span>
    </div>}
    {/* the particular id at the json server is fetched and then deleted.
    
     useHistory is a hook which returns a history obj which keeps a track of the routing in the 
     browser.When we say .push"/" it means it will redirect the page to home after the fetch is resolved.*/}

         </div>
     );
}
 
export default BlogDetails;