import React, { Fragment } from "react";
import Header from "./Header/Header";

export default function Layout ({ children }){
  return (
    <Fragment>
      <Header />
      <div className="container">{children}</div>
    </Fragment>
  );
};


