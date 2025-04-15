import React from "react";
import "./loader.css";
const PageLoader = ({ classes }: { classes?: string }) => {
  return <div className={`loader h-12 w-12 ${classes}`}></div>;
};

export default PageLoader;
