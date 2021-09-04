import './App.css';
import { useEffect, useState } from 'react';
import AppScreen from './Components/AppScreen';
import SignIn from './Components/SignIn';


const App = () => {
  const [isSignedin,setSignedin] = useState(false)
  const [loggedinUser,setloggedinUser] = useState('')
  

  return (
    <div className="App">
      {
      isSignedin?<AppScreen loggedinUser={loggedinUser}/>:<SignIn setSignedin={setSignedin} setloggedinUser={setloggedinUser}/>
      }
      {console.log("App")}
    </div>
  );
}

export default App;
