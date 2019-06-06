import React from "react";

const LoggerHOC = WrappedComponent => {
    console.log("component mounted", WrappedComponent.name);
  return props => {
    return <WrappedComponent {...props} />
  };
};
export default LoggerHOC;
