import {Link} from "react-router-dom";
const BlogList = (props) => {
    let blogs=props.blog;
    let title=props.title;
    // let deleteblog=props.deleteblog;
    //props can have functions also as an argument hence the deleteblog
    //function is fired when a user clicks the delete button.
    //the setBlog function is used to determine the new state so when the 
    //user clicks delete the id is matched and a new array is created called new_blogs and setBlog 
    //will make a new state of variables where in the arrays values are updated without that particular id
    //but when we refresh the page the State of the app is return to initial and the new_array is lost hence all blogs are displayed.
    //console.log(props);
    return ( 
        
        <div className="bloglist">
           <h1>{title}</h1> 
           {blogs.map((blog)=>(
               
<div className="blogpreview" key={blog.id}> 
{/* the key attribute of JSX is used to keep a track of the elements in the ReactDOM
and the key attribute is equal to id so whenever there is a deletion the DOM is kept in tracked. */}
<Link to={`/blog/${blog.id}`}>
    {/* the above is template string and the blog which the user clicks on it will identify 
    the id and route it to blogs/id  */}
<h2>{blog.title}</h2>
<br></br>
    
<span className="author">Written by {blog.author}</span>
</Link>
{/* <span className="button" onClick={()=>deleteblog(blog.id)}>Delete Blog</span> */}

</div>

           ))}
            
            </div>  
     );
}
 
export default BlogList;


// React allows us to pass information to a Component using something called props (stands for properties). 
// Props are basically kind of global variable or object.
// props helps in reusability of components in different parts of the parent components
// here the bloglist can be displayed in multiple places and the props data can be changed by the parent
// element by the dynamic data in the template.The props are passed as JS obj and are accessed by the key
//which is set in the parent component while rendering the child component.
//here the key is blog and the props.blog will give us the array of obj.we can also send string values as the value
//of the keys in props need not always be a dynamic value of the template.
