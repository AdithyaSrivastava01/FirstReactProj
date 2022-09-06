import {useState} from "react"
import { useHistory } from "react-router";
const Create = () => {
const [author,setAuthor]=useState("mario");
const [title,setTitle]=useState(" ");
const [body,setBody]=useState(" ");
const [load,setLoad]=useState(false);
const blog={title,author,body};

/*all the events like onSubmit,onClick,onChange need a callback fuction to invoke the fetch or change of 
state of variables.We need to use an e an event handler which is used to set the states.  */

const history=useHistory();
    return ( 
        <div className="create">
            <h2>Create a New Blog</h2>

            <form onSubmit={(e)=>{
                e.preventDefault();
                setLoad(true);
                fetch("http://localhost:8000/blogs",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(blog)
                    
                }
                // then always takes a callback function no just parameters allowed.
                ).then(()=>{
                    console.log("added");
                    setLoad(false);
history.push("/");
                });
            }}>
                <label>Blog Title:</label>
                <input required type="text" 
                 onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required type="text"
                onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select required type="text"
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option  defaultValue="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                {!load && <button>Add blog</button>}
                {load && <button>Loading....</button>}
            </form>
        </div>
     );
}
 
export default Create;