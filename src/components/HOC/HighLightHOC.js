import React from "react";

// class HighLightHOC extends React.Component{
//     render(){
        
//     }
// }
const HighLightHOC = WrappedComponent => {
    console.log("component mounted", WrappedComponent);
  return props => {
    return <WrappedComponent {...props} />
  };
};
export default HighLightHOC;