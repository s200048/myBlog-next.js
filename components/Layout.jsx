import React from "react";
import { Header } from "./";

// 每個react props 都會有children props
{
  /* <Abc>
    This call children
</Abc> */
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
