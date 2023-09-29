import React from "react";
import { useLocation } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    return <Component {...props} router={{ location }} />;
  };

  return ComponentWithRouterProp;
};

export default withRouter;
