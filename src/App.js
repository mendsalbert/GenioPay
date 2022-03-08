import {
  ChevronDownIcon,
  MenuAlt1Icon,
  PlusCircleIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
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
import geniopay from "./svgs/geniopay.svg";
import star from "./svgs/star.svg";
import wallet2 from "./svgs/wallet2.svg";
import security from "./svgs/security.svg";
import settings from "./svgs/settings.svg";
import wallet22 from "./svgs/wallet-2.svg";
import card2 from "./svgs/card-2.svg";
import dollarsquare from "./svgs/dollar-square.svg";
import profileuser from "./svgs/profile-2user.svg";
import tag from "./svgs/tag.svg";
import Grid from "./svgs/Grid.svg";

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
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
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
      $: 4,
      amt: 10,
    },
    {
      name: "May",
      uv: 3,
      $: 2,
      amt: 10,
    },
    {
      name: "Jun",
      uv: 3,
      $: 4,
      amt: 10,
    },
    {
      name: "July",
      uv: 3,
      $: 1,
      amt: 10,
    },
  ];

  return (
    <Layout>
      <div className="md:hidden">
        {toggle ? (
          <div className="w-11/12  bg-[#017189] md:hidden overflow-auto h-full fixed shadow-2xl top-0 left-0 z-50">
            <div className="flex flex-col p-6 relative">
              <div
                onClick={() => {
                  toggleNav();
                }}
              >
                <XIcon className="text-white h-9 absolute top-0 right-0 m-2 mb-10" />
              </div>
              <div className=" mt-9 text-center flex flex-row items-center justify-center pb-4">
                <img src={geniopay} className="" width={180} />
              </div>
              <div className="bg-[#9bd5e44b] rounded-md space-y-3 flex flex-col p-4 w-full">
                <div className="flex flex-row  items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      <img src={wallet2} />
                    </div>
                    <div className="text-white">
                      <p>Wallet Balance</p>
                      <p className="font-bold">$15,001.00</p>
                    </div>
                  </div>
                  <div>
                    <img src={security} />
                  </div>
                </div>
                <hr />
                <div className="flex flex-row  items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      <img src={star} />
                    </div>
                    <div className="text-white">
                      <p>Wallet Balance</p>
                      <p className="font-bold">$15,001.00</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row items-center justify-between w-full text-center ">
                  <div className="bg-[#FDA4AF] text-center w-6/12 p-2 mr-2 text-white text-lg rounded-sm">
                    Pay-In
                  </div>
                  <div className="bg-white text-center w-6/12 p-2 text-[#2B899D] text-lg rounded-sm">
                    Pay-Out
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-9">
                <div className="flex flex-row">
                  <img src={settings} className=" w-6 mr-4" />
                  <p className="text-white ">Dashboard</p>
                </div>
                <div className="flex flex-row">
                  <img src={wallet22} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Wallet</p>
                </div>
                <div className="flex flex-row">
                  <img src={card2} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Cards</p>
                </div>
                <div className="flex flex-row">
                  <img src={dollarsquare} className="fill-white w-6 mr-4" />
                  <p className="text-white ">FX centre</p>
                </div>
                <div className="flex flex-row">
                  <img src={profileuser} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Beneficiaries</p>
                </div>
                <div className="flex flex-row">
                  <img src={tag} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Perks</p>
                </div>
              </div>

              <div className="bg-[#FFF5E9] rounded-md mt-8 space-y-3 flex flex-col p-4 w-full">
                <div className="flex flex-row ">
                  <img src="/img/broadcast.png" width={100} />
                  <div>
                    <p className="font-bold text-lg">Refer and Earn</p>
                    <p className="text-gray-700">
                      Use the link below to invite friends
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#017189] text-center w-full p-2 mr-2 text-white text-lg rounded-sm">
                    Invites Friends
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <nav className=" w-full bg-white-400 fixed pb-48 md:hidden">
          <div className="px-4 sm:px-10 py-4 bg-white flex flex-row  items-center justify-between shadow-md">
            <div
              onClick={() => {
                toggleNav();
              }}
              className="bg-white  shadow-lg rounded-full  p-4 text-center"
            >
              <MenuAlt1Icon className="h-7 text-gray-700 cursor-pointer" />
            </div>
            <div className=" flex items-center justify-start space-x-2">
              <div className="flex flex-col items-center">
                <img src="/img/upload.png" />
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
                <img src="/img/avtr.png " className="w-14 h-10" />
                <div className="flex flex-col">
                  {/* <p className="text-green-600 text-sm">verified</p>
                  <p className="text-md font-bold text-gray-800">
                    Mends Albert
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="px-4 sm:px-10 pt-32 md:hidden">
          <div>
            <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
              <SearchIcon className="h-6 text-gray-600  pl-2" />
              <input
                type="text"
                placeholder="search"
                className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
              />
            </div>
            <p className="text-center text-2xl  sm:text-3xl text-gray-800 pt-5 font-bold">
              Welcome, Mends Albert
            </p>
          </div>
          <div className="">
            <p className="text-xl text-gray-800 pt-5 pb-1 font-bold sm:text-2xl ">
              Wallet
            </p>
            <div className="sm:flex sm:flex-row-reverse">
              <img src={plus} className="w-10 pb-2 sm:ml-4" />
              <div className="bg-[#FFF6E6] rounded-md w-full sm:w-6/12 flex flex-col p-4 justify-between space-y-6">
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
          </div>
        </main>

        <main className="px-4 sm:px-10">
          <div>
            <p className="text-xl text-gray-800 pt-5 pb-1 font-bold sm:text-2xl ">
              Quick Link
            </p>
            <p className="text-md  text-gray-600 pt-1 pb-1 sm:text-lg">
              Your frequently used actions for easy access
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="white text-center border-2 items-center justify-center space-y-2 rounded-md flex flex-col p-6">
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

        <main className="px-4 sm:px-10 pt-6">
          <div>
            <div className="">
              <div className="flex flex-col sm:flex sm:flex-row  sm:w-full ">
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
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center  p-2 rounded-md shadow-md">
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
      </div>
      <div className="md:flex ">
        <div className="flex flex-row w-full">
          <div className="w-3/12 bg-[#017189]">
            {/* <div className="w-11/12 bg-[#017189] md:hidden overflow-auto h-full fixed shadow-2xl top-0 left-0 z-50"> */}
            <div className="flex flex-col p-6">
              <div className="text-center flex flex-row items-center justify-center pb-4">
                <img src={geniopay} className="" width={160} />
              </div>
              <div className="bg-[#9bd5e44b] rounded-md space-y-3 flex flex-col p-4 w-full">
                <div className="flex flex-row  items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      <img src={wallet2} />
                    </div>
                    <div className="text-white">
                      <p>Wallet Balance</p>
                      <p className="font-bold">$15,001.00</p>
                    </div>
                  </div>
                  <div>
                    <img src={security} />
                  </div>
                </div>
                <hr />
                <div className="flex flex-row  items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      <img src={star} />
                    </div>
                    <div className="text-white">
                      <p>Wallet Balance</p>
                      <p className="font-bold">$15,001.00</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-row items-center justify-between w-full text-center ">
                  <div className="bg-[#FDA4AF] text-center w-6/12 p-2 mr-2 text-white text-lg rounded-sm">
                    Pay-In
                  </div>
                  <div className="bg-white text-center w-6/12 p-2 text-[#2B899D] text-lg rounded-sm">
                    Pay-Out
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-9">
                <div className="flex flex-row bg-white p-4 rounded-md">
                  <img src={Grid} className=" w-6 mr-4" />
                  <p className="text-[#017189] font-bold ">Dashboard</p>
                </div>
                <div className="flex flex-row">
                  <img src={wallet22} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Wallet</p>
                </div>
                <div className="flex flex-row">
                  <img src={card2} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Cards</p>
                </div>
                <div className="flex flex-row">
                  <img src={dollarsquare} className="fill-white w-6 mr-4" />
                  <p className="text-white ">FX centre</p>
                </div>
                <div className="flex flex-row">
                  <img src={profileuser} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Beneficiaries</p>
                </div>
                <div className="flex flex-row">
                  <img src={tag} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Perks</p>
                </div>
              </div>

              <div className="bg-[#FFF5E9] rounded-md mt-8 space-y-3 flex flex-col p-4 w-full">
                <div className="flex flex-row ">
                  <img src="/img/broadcast.png" width={100} />
                  <div>
                    <p className="font-bold text-lg">Refer and Earn</p>
                    <p className="text-gray-700">
                      Use the link below to invite friends
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#017189] text-center w-full p-2 mr-2 text-white text-lg rounded-sm">
                    Invites Friends
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-9/12 m-6">
            <nav className="  w-full flex flex-row justify-between items-center">
              <div>
                <p className="text-center text-2xl  text-gray-800  font-bold">
                  Welcome, Mends Albert
                </p>
              </div>
              <div className="flex flex-row items-center">
                <div className="border-gray-300 border-2 w-5/12 flex flex-row items-center rounded-xl ">
                  <SearchIcon className="h-6 text-gray-600  pl-2" />
                  <input
                    type="text"
                    placeholder="search"
                    className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
                  />
                </div>
                <div className=" ml-5 flex items-center justify-start space-x-2">
                  <div className="flex flex-col justify-center items-center">
                    <img src="/img/upload.png" />
                    <p>0 planted</p>
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
                    <img src="/img/avtr.png " className="w-14 h-10" />
                    <div className="flex flex-col">
                      <p className="text-green-600 text-sm">verified</p>
                      <p className="text-md font-bold text-gray-800 w-full">
                        Mends Albert
                      </p>
                    </div>
                    <ChevronDownIcon className="h-5 text-gray-700 cursor-pointer" />
                  </div>
                </div>
              </div>
            </nav>

            <div className="">
              <p className="text-lg  text-gray-800 pt-5 pb-4 font-bold sm:text-2xl ">
                Wallet
              </p>
              <div className="flex flex-row">
                <div className="bg-[#FFF6E6] rounded-md w-4/12 flex flex-col p-4 justify-between space-y-6">
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
                <img src={plus} className="w-10 pb-2 cursor-pointer" />
              </div>
            </div>

            <main className="">
              <div>
                <p className="text-lg  text-gray-800 pt-5 pb-0 font-bold sm:text-2xl ">
                  Quick Link
                </p>
                <p className="text-md text-gray-600 pt-1 pb-7 sm:text-lg">
                  Your frequently used actions for easy access
                </p>
                <div className="grid grid-cols-7  gap-3">
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

            <main className="px-4 sm:px-10 pt-6">
              <div>
                <div className="">
                  <div className="flex flex-row justify-between ">
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
                  </div>
                  <div className="flex flex-row justify-end space-x-2">
                    <div className="flex items-center  p-2 rounded-md shadow-md">
                      <img src={trans} className="w-16 mr-5" />
                      <div>
                        <p>Total transaction</p>
                        <p className="font-bold">$88,666.00</p>
                      </div>
                    </div>
                    <div className="flex items-center  p-2 rounded-md shadow-md">
                      <img src={payout} className="w-16 mr-5" />
                      <div>
                        <p>Pay-In</p>
                        <p className="font-bold">$88,666.00</p>
                      </div>
                    </div>

                    <div className="flex items-center  p-2 rounded-md shadow-md">
                      <img src={payin} className="w-16 mr-5" />
                      <div>
                        <p>Pay-Out</p>
                        <p className="font-bold">$88,666.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-9 pb-9">
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart
                        width={500}
                        height={600}
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
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default App;
