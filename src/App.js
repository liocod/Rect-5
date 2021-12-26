import React from 'react';
import FullName from './person/FullName';
import Bio from './person/Bio';
import Imgsrc from './person/Imgsrc';
import Profession from './person/Profession';
import Time from './Time';
// import Toggle from './Toggle';


class App extends React.Component{
  render(){
    return(
    <div>

      <FullName />
      <Profession />
      <Bio /> 
      <Imgsrc />
      <Time />
      {/* <Toggle /> */}

    </div>
    );
  }
}

export default App;



    
    

