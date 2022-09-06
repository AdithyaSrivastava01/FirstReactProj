import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <div className="navbar">
           <h1>Blogs</h1>
           <div className="links">
               <Link to="/">Home</Link>
               <Link to="/create">Create</Link>
               <Link to="/query">Query</Link>
           </div>
        </div>
    );
}
 
export default Navbar;
/*All the navigation of different pages is done by navbar the use the link router to enable the react from stop 
rendering from the server and render the pages only on the client side.Whwnever user clicks any of the links the React rerenders 
the DOM and displays the contents of the JSX file which is being called in APP.js  */
/*the Router do not have the href and anchor tags hence we use Link from the react-router-dom and for the 
href attribute we use 'to' property.  */
//but when we repeatedly keep switching from create route to home the fetch api takes some time and hence an error is thrown

//Error:
//Can't perform a React state update on an unmounted component.The unmounted component is Home as we switch to Create very quickly.
//to overcome this we use useEffect cleanup.