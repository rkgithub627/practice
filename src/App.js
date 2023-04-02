import './App.css';
import {Navbar} from './components'
import {ABOUTUS, CAREEROPPORTUNITY, EMPLOYER, CONTACTUS, ITPROJECTDEVELOPMENT, SIGNUP } from './container';
const tapes = [1,2,3,4]
function App() {


  return (
    <>
    <Navbar />
    <ABOUTUS />
    <CAREEROPPORTUNITY />
    <EMPLOYER/>
    <CONTACTUS/>
    <ITPROJECTDEVELOPMENT/>
    <SIGNUP/>
    {tapes[0]}
    
    
    </>
  );
}

export default App;
