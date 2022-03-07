import {
  ChevronDownIcon,
  MenuAlt1Icon,
  PlusCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import React from "react";
import Layout from "./components/Layout/Layout";
import trans from "./svgs/trans.svg";
import wallet from "./svgs/wallet.svg";
import account from "./svgs/account.svg";
import ballance from "./svgs/ballance.svg";
import momo from "./svgs/momo.svg";
import voucher from "./svgs/voucher.svg";
import link from "./svgs/link.svg";
import card from "./svgs/card.svg";
import payin from "./svgs/payin.svg";
import payout from "./svgs/payout.svg";
import plus from "./svgs/plus.svg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const App = () => {
  const formatter = (value) => `$${value}K`;
  const data = [
    {
      name: "Jan",
      uv: 10,
      $: 3,
      amt: 30,
    },
    {
      name: "Feb",
      uv: 2,
      $: 2,
      amt: 20,
    },
    {
      name: "Mar",
      uv: 3,
      $: 5,
      amt: 10,
    },
    {
      name: "Apr",
      uv: 3,
      $: 3,
      amt: 10,
    },
  ];

  return (
    <Layout>
      <div className="w-11/12 bg-[#017189] h-full fixed shadow-2xl top-0 left-0 z-50"></div>
      <nav className=" w-full bg-white-400 fixed pb-48">
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
              {/* <div className="bg-black w-8 h-8 rounded-full mr-1"></div> */}
              <img src="/img/avtr.png " className="w-14 h-10" />
              <div className="flex flex-col">
                <p className="text-green-600 text-sm">verified</p>
                <p className="text-md font-bold text-gray-800">Mends Albert</p>
              </div>
              {/* <ChevronDownIcon className="h-7 text-gray-700 cursor-pointer" /> */}
            </div>
          </div>
        </div>
      </nav>
      <main className="px-4 pt-32">
        <div>
          <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
            <SearchIcon className="h-6 text-gray-600  pl-2" />
            <input
              type="text"
              placeholder="search"
              className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
            />
          </div>
          <p className="text-center text-2xl text-gray-800 pt-5 font-bold">
            Welcome, Mends Albert
          </p>
        </div>
        <div>
          <p className="text-lg  text-gray-800 pt-5 pb-1 font-bold ">Wallet</p>
          {/* <PlusCircleIcon className="h-12 text-[#017189] pb-2 " /> */}
          <img src={plus} className="w-10 pb-2" />
          <div className="bg-[#FFF6E6] rounded-md w-full flex flex-col p-4 justify-between space-y-6">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p>Personal Account</p>
                <p>USD</p>
              </div>
              <img src="/img/usd.png" />
            </div>
            <div>
              <p className="font-bold text-2xl">$ 10,250.00</p>
            </div>
          </div>
        </div>
      </main>

      <main className="px-4 ">
        <div>
          <p className="text-lg  text-gray-800 pt-5 pb-1 font-bold ">
            Quick Links
          </p>
          <p className="text-md  text-gray-600 pt-1 pb-1 ">
            Your frequently used actions for easy access
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
              <img src={wallet} className="w-10" />

              <p className="text-gray-500  ">Add new Wallet</p>
            </div>
            <div className="bg-white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
              <img src={card} className="w-10" />
              <p className="text-gray-500  ">Add new Card</p>
            </div>

            <div className="bg-white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
              <img src={ballance} className="w-10" />
              <p className="text-gray-500  ">Balance Exchange</p>
            </div>
            <div className="bg-white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
              <img src={account} className="w-10" />
              <p className="text-gray-500  ">transfer to Account</p>
            </div>

            <div className="bg-white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
              <img src={voucher} className="w-10" />
              <p className="text-gray-500  ">Generate Voucher</p>
            </div>
            <div className="bg-white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
              <img src={momo} className="w-10" />
              <p className="text-gray-500  ">Mobile Money</p>
            </div>

            <div className="bg-white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
              <img src={link} className="w-10" />
              <p className="text-gray-500  ">Payment Link</p>
            </div>
          </div>
        </div>
      </main>

      <main className="px-4 pt-6">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center pb-3">
              <p className="font-bold text-lg mr-5"> Activity</p>
              <div className=" flex flex-row items-center text-[#017189]">
                <p>Month</p>
                <ChevronDownIcon className="h-7 text-gray-700 cursor-pointer" />
              </div>
            </div>

            <div className="text-lg font-bold pb-3 text-[#017189] cursor-pointer">
              View transaction history
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center bg-gray-100 p-2 rounded-md shadow-md">
                <img src={trans} className="w-16 mr-5" />
                <div>
                  <p>Total transaction</p>
                  <p className="font-bold">$88,666.00</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-2 rounded-md shadow-md">
                <img src={payout} className="w-16 mr-5" />
                <div>
                  <p>Pay-In</p>
                  <p className="font-bold">$88,666.00</p>
                </div>
              </div>

              <div className="flex items-center bg-gray-100 p-2 rounded-md shadow-md">
                <img src={payin} className="w-16 mr-5" />
                <div>
                  <p>Pay-Out</p>
                  <p className="font-bold">$88,666.00</p>
                </div>
              </div>
            </div>

            <div className="pt-9 pb-9">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  width={500}
                  height={200}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[1, 5]} tickFormatter={formatter} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="$"
                    // stroke="#82ca9d"
                    stroke="#008aa8"
                    strokeWidth={5}
                    fill="#82ca9d"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default App;
