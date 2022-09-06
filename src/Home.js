//import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // const [blogs,setBlogs]=useState([
    //     {title:"My World",body:"lorem ipsum......",author:"John",id:1},
    //     {title:"My Universe",body:"lorem ipsum......",author:"Arthur",id:2},
    //     {title:"My City",body:"lorem ipsum......",author:"Peck",id:3}

    // ]);

//  const [blogs,setBlogs]=useState(null);   
// const [load,setPending]=useState(true);
// const [error,setError]=useState(null);
const {data:blogs,load,error}=useFetch("http://localhost:8000/blogs");
// here /blogs is present as the key of the JSON file is named blogs.

 //here the state remains data only but we provide an alias as blogs for easy understanding
 //we write data:blogs and now the data state can be used by the name blogs.

// const deleteblogs=(id)=>{
//     let new_blogs=blogs.filter((blog)=>blog.id!==id)
//     setBlogs(new_blogs);
//         }

    return ( 
<div className="home">
    {error && <div>{error}</div>}
    {/* the above code is an example of conditional template where initial value of error is null and {error}=null but
    it wont print in the browser as the AND condition wont be satisfied.*/}
    {load && <div>Loading...</div>}
        {blogs && <BlogList  blog={blogs} title="All Blogs"/>}
        {/* on the onClick function we need to write JS code hence use curly braces */}
{/* similarly the the BlogList component always return true only when blogs are not null and have a value in 
it then only the statement is executed or the statement doesnt satisfy the AND condition */}
{/* conditional templates always have a state AND component,the component is always true but all the execution depends onthe state */}
        </div>
     );
} 
// map creates a new array by transforming every element in an array individually. 
// filter creates a new array by removing elements that don't belong. 
//no need of {} as they dont return any value.

export default Home;

//all the function are arrow function and use 
//keyword sfc to get the emmet abberiviation
//sfc=stateless function components
