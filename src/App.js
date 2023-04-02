import './App.css';
import {Navbar} from './components'
import {ABOUTUS, CAREEROPPORTUNITY, EMPLOYER, CONTACTUS, ITPROJECTDEVELOPMENT, SIGNUP,ITTECHNICALSUPPORT, HOME } from './container';
const tapes = [1,2,3,4]
function App() {


  return (
    <>
    <Navbar />
    <HOME/>
    <ABOUTUS />
    <CAREEROPPORTUNITY />
    <EMPLOYER/>
    <CONTACTUS/>
    <ITPROJECTDEVELOPMENT/>
    <SIGNUP/>
    <ITTECHNICALSUPPORT/>
    {tapes[0]}
    
    
    </>
  );
}

export default App;
