import React from "react";

const LoggerHOC = WrappedComponent => {
    console.log("component mounted", WrappedComponent.name);
    return (ContextValue)=>{
      return class extends React.Component{
      static contextType = ContextValue;
        constructor(props, context){
          super(props, context);
          console.log("loggerHOC", context, this.context);
        }
        componentDidMOunt(){
          console.log("componentDidMOunt", WrappedComponent.name)
        }
        componentDidUpdate(){
          console.log("componentDidUpdate", WrappedComponent.name)
        }
        render(){
          return <WrappedComponent className="wrappedComponent" {...this.props}/>
        }
      }
    }
};
export default LoggerHOC;