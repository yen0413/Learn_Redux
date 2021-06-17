
import '../App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,Login} from '../actions';


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  let Name = '';
  const handleInputName =(e)=>{
       Name = document.getElementById("inputName").value;
       console.log(Name);
  }

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(2))}>-</button>

      <input type="text" id='inputName' onChange={handleInputName}></input>
      <button onClick={()=>dispatch(Login(Name))}>Login</button>
      {isLogged ? <h3>Yes! I'm login now.</h3> :''}
    </div>
  );
}

export default App;
