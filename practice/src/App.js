import logo from './logo.svg';
import './App.css';

import Tablecreation from './tablecreation/table';
import  store from './react-redux/stores'




function App() {


  const backgroundstyle = {

    backgroundImage: `url('sunset-1373171_640.jpg')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height:'100vh'
   
}

  return (
    <div style={backgroundstyle}>
    {/* <Tablecreation></Tablecreation> */}
    
    {/* <Forms></Forms>
    <Account></Account> */}
    </div>
  );
}

export default App;
