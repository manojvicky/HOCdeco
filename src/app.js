import React from 'react';
import LoggerHOC from "./LoggerHOC";
import Demo from "./Demo";
@LoggerHOC
class App extends React.Component {
  constructor(){
    super();
  }
   render() {
      return (
        <div>
          yoo
          <Demo/>
        </div>
      );
   }
}
export default App;