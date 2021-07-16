//eslint-disable-next-line 
import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

/*//Components
import Temp from "./components/temp.jsx"; */


//JSX
function App() {
  return (
    <>
      <DefaultHOC path = "/" exact component/>
    </>
  ); 
}

export default App;
