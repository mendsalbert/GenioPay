import React from "react";

const Layout = (props) => {
  return (
    <body className="bg-[#FCFDFE] font-NunitoSans relative  w-full h-screen">
      {props.children}
    </body>
  );
};

export default Layout;
