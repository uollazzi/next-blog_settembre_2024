import React, { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <>
      <h1>Articoli</h1>
      <div>{children}</div>
    </>
  );
};

export default Layout;
