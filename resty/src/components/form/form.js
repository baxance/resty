import { useState } from 'react';
import './form.scss';

function Form(props) {

  // console.log(props)

  let [input, setInput] = useState(''); //input = getter, setInput = setter
  let [method, setMethod] = useState('');
  // const [selectedMethod, setSelectedMethod] = useState('');

  function handleInput(e) {
    let { value, url } = e.target;
    console.log(value, url);
    setInput(value);
    console.log(input);
  }

  function handleMethods(e) {
    let {value, crud} = e.target;
    console.log(value, crud);
    setMethod(value);
    console.log(method);
  }

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    props.updateUrl(input);
    props.updateMethod(method);
  }


  // const selectMethod = methodSelected => {
  //   setSelectedMethod(methodSelected)
  // }


  return(
    <form onSubmit={handleSubmit}>

      <div className="textSubmissionDiv">
        <input onChange={handleInput} type="text" url="param" placeholder="PLACEHOLDER TEXT"></input>
        <button type="submit">Submit</button>  
        <button type="reset" value="Reset">Reset</button>
      </div>

      <div> 
        <button onClick={handleMethods} type="button" className="getButton" value="GET" >Get</button>
        <button onClick={handleMethods} type="button" className="putButton" value="PUT" >Put</button>
        <button onClick={handleMethods} type="button" className="postButton" value="POST" >Post</button>
        <button onClick={handleMethods} type="button" className="deleteButton" value="DELETE" >Delete</button>
      </div>

    </form>
  )
}
//this.state.VARIABLE
export default Form;