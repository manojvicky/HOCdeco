import React from 'react';
import LoggerHOC from "./LoggerHOC";

@LoggerHOC
class Demo extends React.Component {
  constructor(){
    super();
  }
   render() {
      return (
        <div>
          Demo
        </div>
      );
   }
}
export default Demo;