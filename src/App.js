// import logo from "./logo.svg";
// import "./App.css";
// import "./styles/output.css";

// function App() {
//   return (
// <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
//   <h1 className="text-5xl text-white">Hello Tailwind 👋 </h1>
//   <p className="text-gray-400 mt-5 text-lg">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
//     consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
//     eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
//   </p>
//   <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
//     Hello Friends 🚀
//   </button>

//   <img src="/img/genopay_logo.png" />
// </div>
//   );
// }

// export default App;

import React from "react";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <nav className=" w-full bg-white-400 ">
        <div className="px-4 py-2 bg-white flex flex-row  items-center justify-between shadow-md">
          <div className="bg-white  shadow-lg rounded-md p-4 text-center">
            <span>...</span>
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
