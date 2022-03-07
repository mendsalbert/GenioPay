import { MenuAlt1Icon } from "@heroicons/react/outline";
import React from "react";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <nav className=" w-full bg-white-400 ">
        <div className="px-4 py-4 bg-white flex flex-row  items-center justify-between shadow-md">
          <div className="bg-white  shadow-lg rounded-full  p-4 text-center">
            <MenuAlt1Icon className="h-7 text-gray-700 cursor-pointer" />
          </div>
          <div className=" flex items-center">
            <div className="flex flex-col items-center">
              <img src="/img/upload.png" />
              <p>0 Planted</p>
            </div>
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
