import { ChevronDownIcon, MenuAlt1Icon } from "@heroicons/react/outline";
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
          <div className=" flex items-center justify-start space-x-2">
            <div className="flex flex-col items-center">
              <img src="/img/upload.png" />
              {/* <p>0 Planted</p> */}
            </div>

            <div className="relative">
              <img src="img/notification.png" />
              <div className=" absolute -top-2 -right-1 ">
                <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white  text-sm  leading-tight text-center">
                  5
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center pr-1 ">
              <div className="bg-black w-8 h-8 rounded-full mr-1"></div>
              <div className="flex flex-col">
                <p className="text-green-600 text-sm">verified</p>
                <p className="text-md font-bold text-gray-800">Mends Albert</p>
              </div>
              {/* <ChevronDownIcon className="h-7 text-gray-700 cursor-pointer" /> */}
            </div>
          </div>
        </div>
      </nav>
    </Layout>
  );
};

export default App;
