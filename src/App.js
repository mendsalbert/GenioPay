import { MenuAlt1Icon } from "@heroicons/react/outline";
import React from "react";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <nav className=" w-full bg-white-400 ">
        <div className="px-4 py-2 bg-white flex flex-row  items-center justify-between shadow-md">
          <div className="bg-white  shadow-lg rounded-full  p-4 text-center">
            <MenuAlt1Icon className="h-5" />
          </div>
          <div>
            <span>D/L</span>
            <span>UPLOAD</span>
            <span>NOTIF</span>
            <span>AVRT</span>
          </div>
        </div>
      </nav>
    </Layout>
  );
};

export default App;
