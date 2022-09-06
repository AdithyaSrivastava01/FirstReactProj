//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Navbar.js"
//need a name alias for the component we imorting
//here it is Navbar
import Home from "./Home.js"
import Create from "./Create.js"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import BlogDetails from "./BlogDetails.js";
import NotFound from "./NotFound.js";
import Query from "./Query.js";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// Create a client
const queryClient=new QueryClient();

function App() {

  
  return (
    <Router>
    <div className="App">
    
      <Navbar />
      {/* these components are self closing 
      it is equivalent to <Navbar></Navbar> */}
   <div className="content">
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/create">
         <Create></Create>
       </Route>
       <Route path="/blog/:id"> 
       {/* this page will give the detailed description of each blog bassed on th id passed
       if the url is blogs/1 the blog with id===1 will be routed from the json server and a fetch api is called. */}
         <BlogDetails></BlogDetails>
       </Route>
       <Route  path="/query">
         {/* // Provide the client to your App
         it is very imp to give access to the component which is gonna use the query selector. */}
       <QueryClientProvider client={queryClient}>
      <Query></Query>
     </QueryClientProvider>
       </Route>
       <Route path="*">
         {/* the * represents that any url apart from the mentioned above url is mentioned
         the the browser reroutes it to not found component. */}
<NotFound/>
       </Route>
     </Switch>
     
   </div>
    </div>
    </Router>
  );
}

export default App;

/*here the browser acts as a router and handles the rendering 
the switch maintains the different routes that are present in our app
exact path is required as the path is matches leads to same home page url
hence in case of path="/" and path="/create" the reult page is always a Home page and hence we require the exact path 
keyword. */