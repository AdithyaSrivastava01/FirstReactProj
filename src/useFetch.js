import { useEffect,useState} from "react"

const useFetch=(url)=>{

  
    const [data,setData]=useState(null);   
const [load,setPending]=useState(true);
const [error,setError]=useState(null);
    useEffect(() => {

      const abort_check= new AbortController();
        setTimeout( ()=>fetch(url,{signal:abort_check.signal})
           .then(response => {
               if(response.status===404){
                   //console.log(response);
                   throw(Error("cant connect"));
               }
             return response.json();
           })
           .then(data => {
             setData(data);
             setPending(false);
             setError(false);
           }).catch(err=>{
             if(err.name==="AbortError"){
               console.log("fetch aborted")
             }
     else{setError(err.message);
     setData(null);
             setPending(false);}
           }),10);
           return ()=> abort_check.abort();//this is a clean up function of a useEffect hook and it is only fired when
           //the component using the hook  is unmounted so whenever we leave the Home component and go to the blog component
           //this function is fired.First we use an AbortController obj that is attached to the fetch url signal
           //whenever the component is unmounted in the browser the function is called and signal is aborted
           //when the signal is aborted the fetch throws an error obj of name AbortError with is then handled in catch block.
       }, [url]);
       return {data,load,error};
}

   export default useFetch;
/* this is a custom hook which can be imported into different components to achieve the following state manangement like 
data, error and loading preview 
collection of data is a state , the fail in fetching is also a state and the loading of the application
while the data is being fetch is also a state.
we return these state in an obj as it becomes easy to derefrence  */


/*Note:while defrencing the state in the component where we need this custom hook we make sure the state names are same though
we can use a alias like in the case of data state we use blogs  by writing the code as data:blogs */