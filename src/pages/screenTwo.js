import {
  ChevronDownIcon,
  MenuAlt1Icon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import React, { useRef } from "react";
import Layout from "../components/Layout/Layout";

import geniopay from "../svgs/geniopay.svg";
import star from "../svgs/star.svg";
import wallet2 from "../svgs/wallet2.svg";
import security from "../svgs/security.svg";
import settings from "../svgs/settings.svg";

import wallet_active from "../svgs/wallet_active.svg";
import card2 from "../svgs/card-2.svg";
import dollarsquare from "../svgs/dollar-square.svg";
import profileuser from "../svgs/profile-2user.svg";
import tag from "../svgs/tag.svg";

import arrow from "../svgs/Arrow.svg";
import { Link } from "react-router-dom";
import icon1 from "../svgs/icon1.svg";
import icon2 from "../svgs/icon2.svg";
import icon3 from "../svgs/icon3.svg";
import icon4 from "../svgs/icon4.svg";
import icon5 from "../svgs/icon5.svg";
import payinvoucher from "../svgs/payinvoucher.svg";
const ScreenOne = () => {
  const toggleRef = useRef(null);

  const openMenu = () => {
    toggleRef.current.style.width = "90%";
  };

  const closeMenu = () => {
    toggleRef.current.style.width = "0%";
  };

  return (
    <Layout>
      <div className="lg:hidden ">
        <div
          ref={toggleRef}
          className="w-0 transition-width duration-200 delay-75 ease-in-out bg-[#017189] lg:hidden overflow-auto h-full fixed shadow-2xl top-0 left-0 z-50"
        >
          <div className="flex flex-col p-6 relative">
            <div
              onClick={() => {
                closeMenu();
              }}
            >
              <XIcon className="text-white h-9 absolute top-0 right-0 m-2 mb-10" />
            </div>
            <div className=" mt-9 text-center flex flex-row items-center justify-center pb-4">
              <img alt="alt" src={geniopay} className="" width={180} />
            </div>
            <div className="bg-[#9bd5e44b] rounded-md space-y-3 flex flex-col p-4 w-full">
              <div className="flex flex-row  items-center justify-between w-full">
                <div className="flex flex-row items-center">
                  <div className="mr-3">
                    <img alt="alt" src={wallet2} />
                  </div>
                  <div className="text-white">
                    <p>Wallet Balance</p>
                    <p className="font-bold">$15,001.00</p>
                  </div>
                </div>
                <div>
                  <img alt="alt" src={security} />
                </div>
              </div>
              <hr />
              <div className="flex flex-row  items-center justify-between w-full">
                <div className="flex flex-row items-center">
                  <div className="mr-3">
                    <img alt="alt" src={star} />
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
              <div className="flex flex-row ">
                <img alt="alt" src={settings} className=" w-6 mr-4" />
                <p className="text-white">
                  <Link to="/">Dashboard</Link>
                  {/* <NavLink to='/'>Dashboard</NavLink> */}
                </p>
              </div>
              <div className="flex flex-row bg-white p-4 rounded-md">
                <img
                  alt="alt"
                  src={wallet_active}
                  className="fill-white w-6 mr-4"
                />

                <p className="text-[#017189] font-bold">
                  <Link to="/wallet">Wallet</Link>
                </p>
              </div>
              <div className="flex flex-row">
                <img alt="alt" src={card2} className="fill-white w-6 mr-4" />
                <p className="text-white ">Cards</p>
              </div>
              <div className="flex flex-row">
                <img
                  alt="alt"
                  src={dollarsquare}
                  className="fill-white w-6 mr-4"
                />
                <p className="text-white ">FX centre</p>
              </div>
              <div className="flex flex-row">
                <img
                  alt="alt"
                  src={profileuser}
                  className="fill-white w-6 mr-4"
                />
                <p className="text-white ">Beneficiaries</p>
              </div>
              <div className="flex flex-row">
                <img alt="alt" src={tag} className="fill-white w-6 mr-4" />
                <p className="text-white ">Perks</p>
              </div>
            </div>

            <div className="bg-[#FFF5E9] rounded-md mt-8 space-y-3 flex flex-col p-4 w-full">
              <div className="flex flex-row ">
                <img alt="alt" src="/img/broadcast.png" width={100} />
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

        <nav className=" w-full bg-white-400 fixed pb-48 lg:hidden">
          <div className="px-4 sm:px-10 py-4 bg-white flex flex-row  items-center justify-between shadow-md">
            <div
              onClick={() => {
                openMenu();
              }}
              className="bg-white  shadow-lg rounded-full  p-4 text-center"
            >
              <MenuAlt1Icon className="h-7 text-gray-700 cursor-pointer" />
            </div>
            <div className=" flex items-center justify-start space-x-2">
              <div className="flex flex-col items-center">
                <img alt="alt" src="/img/upload.png" />
              </div>

              <div className="relative">
                <img alt="alt" src="img/notification.png" />
                <div className=" absolute -top-2 -right-1 ">
                  <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white  text-sm  leading-tight text-center">
                    5
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center pr-1 ">
                <img alt="alt" src="/img/avtr.png " className="w-14 h-10" />
                <div className="flex flex-col"></div>
              </div>
            </div>
          </div>
        </nav>
        <main className="px-4 pb-11 sm:px-10 pt-32 lg:hidden">
          <div>
            <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
              <SearchIcon className="h-6 text-gray-600  pl-2" />
              <input
                type="text"
                placeholder="search"
                className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
              />
            </div>
            <div className="bg-[#017189] flex flex-row items-center text-center md:w-4/12 my-3 p-2 mr-2 text-white text-lg rounded-lg  md:justify-self-end">
              <span>
                <PlusIcon className="h-5 mr-1 text-white" />
              </span>
              Create new wallet
            </div>
            <p className="text-left text-2xl  sm:text-3xl text-gray-800 pt-5 font-bold">
              Your wallet (s)
            </p>
          </div>
          <div className="">
            <div className="flex flex-row items-center space-x-3 my-3">
              <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
                <SearchIcon className="h-6 text-gray-600  pl-2" />
                <input
                  type="text"
                  placeholder="search"
                  className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
                />
              </div>
              <div className=" flex flex-row items-center text-[#017189]">
                <p>All</p>
                <ChevronDownIcon className="h-7 text-gray-700 cursor-pointer" />
              </div>
            </div>

            <div className="flex flex-row pb-5 pt-5 justify-between">
              <p className="border-b-4 border-[#017189]">Active(3)</p>
              <p>Inactive(2)</p>
              <p>close(0)</p>
            </div>

            <div className="flex flex-col pt-8 space-y-9">
              <div className=" bg-[#EEF7F9] py-4 px-1 rounded-md flex flex-row justify-between w-full">
                <div className="flex flex-row space-x-2">
                  <img alt="alt" src="/img/euro.png" className="rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-sm">EUR Wallet</span>
                    <span className="text-sm">EUR</span>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-bold">&euro; 2,000,000.00</span>
                  <span className="text-sm">Default</span>
                </div>
              </div>

              <div className="bg-white shadow-sm">
                <div className="border-2 rounded-md p-4 flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span className="flex flex-row text-green-600  space-x-3 items-center">
                      <span className="bg-green-600  w-2 h-2 mr-2 rounded-full"></span>
                      Active
                    </span>
                    <span>EUR Wallet</span>
                    <span className="text-[#0A6375] font-bold">EUR</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">&#163;2,000,000.50</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  justify-between">
                <div className="flex flex-col ">
                  <div className="flex flex-row items-center justify-between ">
                    <p className="text-gray-600">Ledger Balance</p>
                    <p className="font-bold text-md">&#163;2,000,000.50</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-600">Blocked Balance</p>
                    <p className="font-bold text-md">&#163;0.00</p>
                  </div>
                </div>
                <div className="flex flex-col mt-3">
                  <div className="flex flex-row items-center justify-between ">
                    <p className="text-gray-600">Total Incoming</p>
                    <p className="font-bold text-md">&#163;2,000,000.50</p>
                  </div>
                  <div className=" flex flex-row items-center justify-between">
                    <p className="text-gray-600">Total Outgoing</p>
                    <p className="font-bold text-md">&#163;2,000,000.50</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="bg-white border-2 cursor-pointer flex flex-row items-center justify-center p-2 text-center rounded-md border-[#017189] text-[#017189]">
                  <img alt="alt" src="/img/payment.png" className="mr-2" />
                  <span>Payment</span>
                </div>
                <div className="bg-white border-2 cursor-pointer flex flex-row items-center justify-center p-2 text-center rounded-md border-[#017189] text-[#017189]">
                  <img alt="alt" src={arrow} className="mr-2" />
                  <span>Pay In</span>
                </div>
                <div className="bg-white border-2 cursor-pointer flex flex-row items-center justify-center p-2 text-center rounded-md border-[#017189] text-[#017189]">
                  <img alt="alt" src="/img/exchange.png" className="mr-2" />
                  <span>Exchange</span>
                </div>
              </div>

              <div>
                <div className=" flex flex-row items-center text-[#017189]">
                  <p>More options</p>
                  <ChevronDownIcon className="h-7 ml-2 text-[#017189] cursor-pointer" />
                </div>

                <div className="space-y-4 mt-8">
                  <div className="flex flex-row items-center">
                    <img alt="alt" src={icon1} className="fill-white  mr-4" />
                    <p className="text-gray-700">Remove as default wallet</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img alt="alt" src={icon2} className="fill-white  mr-4" />
                    <p className="text-gray-700">View Linked Card</p>
                  </div>

                  <div className="flex flex-row items-center">
                    <img alt="alt" src={icon3} className="fill-white  mr-4" />
                    <p className="text-gray-700">Statements</p>
                  </div>

                  <div className="flex flex-row items-center">
                    <img alt="alt" src={icon4} className="fill-white mr-4" />
                    <p className="text-gray-700">Inflow Details</p>
                  </div>

                  <div className="flex flex-row items-center">
                    <img alt="alt" src={icon5} className="fill-white  mr-4" />
                    <p className="text-gray-700">Wallet Information</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row pb-5 pt-5 justify-between">
                    <p className="">Activity</p>
                    <p className="border-b-4 border-[#017189] font-bold">
                      Transactions
                    </p>
                    <p>Invoices</p>
                  </div>
                </div>

                <div className="flex flex-col  justify-between">
                  <div className="flex flex-col ">
                    <div className="flex flex-row items-center justify-between ">
                      <p className="text-gray-600">22 Jul, 2022</p>
                      <p className="font-bold text-md text-[#0A6375]">
                        View All
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className=" bg-white py-4 px-1 rounded-md flex flex-row justify-between w-full">
                        <div className="flex flex-row space-x-2">
                          <img
                            alt="alt"
                            src={payinvoucher}
                            className="rounded-full"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm">Pay In-Voucher</span>
                            <span className="text-sm">EUR wallet</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="font-bold text-[#16A34A]">
                            &euro;750.65
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Euro wallets active */}
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row space-x-2">
                  <img alt="alt" src="/img/usd.png" className="rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-sm">Personal Account</span>
                    <span className="text-sm">USD</span>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-bold">&#36; 10,250.00</span>
                  {/* <span className="text-sm">Default</span> */}
                </div>
              </div>

              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row space-x-2">
                  <img alt="alt" src="/img/uk.png" className="rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-sm">School Savings</span>
                    <span className="text-sm">GDP</span>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-bold">&#163; 500.00</span>
                  {/* <span className="text-sm">Default</span> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:flex hidden ">
        <div className="flex flex-row w-full">
          <div className="w-3/12 bg-[#017189]">
            <div className="flex flex-col p-6">
              <div className="text-center flex flex-row items-center justify-center pb-4">
                <img alt="alt" src={geniopay} className="" width={160} />
              </div>
              <div className="bg-[#9bd5e44b] rounded-md space-y-3 flex flex-col p-4 w-full">
                <div className="flex flex-row  items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      <img alt="alt" src={wallet2} />
                    </div>
                    <div className="text-white">
                      <p>Wallet Balance</p>
                      <p className="font-bold">$15,001.00</p>
                    </div>
                  </div>
                  <div>
                    <img alt="alt" src={security} />
                  </div>
                </div>
                <hr />
                <div className="flex flex-row  items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <div className="mr-3">
                      <img alt="alt" src={star} />
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
                  <img alt="alt" src={settings} className=" w-6 mr-4" />
                  <p className="text-white font-bold ">
                    <Link to="/">Dashboard</Link>
                  </p>
                </div>
                <div className="flex flex-row bg-white p-4 rounded-md">
                  <img
                    alt="alt"
                    src={wallet_active}
                    className="fill-white w-6 mr-4"
                  />
                  <p className="text-[#017189] font-bold">Wallet</p>
                </div>
                <div className="flex flex-row">
                  <img alt="alt" src={card2} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Cards</p>
                </div>
                <div className="flex flex-row">
                  <img
                    alt="alt"
                    src={dollarsquare}
                    className="fill-white w-6 mr-4"
                  />
                  <p className="text-white ">FX centre</p>
                </div>
                <div className="flex flex-row">
                  <img
                    alt="alt"
                    src={profileuser}
                    className="fill-white w-6 mr-4"
                  />
                  <p className="text-white ">Beneficiaries</p>
                </div>
                <div className="flex flex-row">
                  <img alt="alt" src={tag} className="fill-white w-6 mr-4" />
                  <p className="text-white ">Perks</p>
                </div>
              </div>

              <div className="bg-[#FFF5E9] rounded-md mt-8 space-y-3 flex flex-col p-4 w-full">
                <div className="flex flex-row ">
                  <img alt="alt" src="/img/broadcast.png" width={100} />
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
                  Wallet
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
                  <div className="flex flex-row space-x-2 justify-center items-center">
                    <img alt="alt" src="/img/upload.png" />
                    <p>0 planted</p>
                  </div>

                  <div className="relative">
                    <img alt="alt" src="img/notification.png" />
                    <div className=" absolute -top-2 -right-1 ">
                      <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white  text-sm  leading-tight text-center">
                        5
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row items-center pr-1 ">
                    <img alt="alt" src="/img/avtr.png " className="w-14 h-10" />
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

            <div className=" py-11 flex flex-row justify-between items-center">
              <p className="text-lg  text-gray-800 pt-5 pb-4 font-bold sm:text-2xl ">
                Your wallet
              </p>
              <div className="bg-[#017189] flex flex-row items-center text-center  my-3 p-2  text-white text-lg rounded-lg ">
                <span>
                  <PlusIcon className="h-5 mr-1 text-white" />
                </span>
                Create new wallet
              </div>
            </div>

            <main className="w-full flex flex-row space-x-14">
              <div className=" w-5/12 ">
                <div className="flex flex-row items-center space-x-3 my-3">
                  <div className="border-gray-300 border-2 w-full flex flex-row items-center rounded-xl ">
                    <SearchIcon className="h-6 text-gray-600  pl-2" />
                    <input
                      type="text"
                      placeholder="search"
                      className=" rounded-lg p-2 w-full bg-transparent text-lg font-Montserrat  focus:outline-none"
                    />
                  </div>
                  <div className=" flex flex-row items-center text-[#017189]">
                    <p>All</p>
                    <ChevronDownIcon className="h-7 text-gray-700 cursor-pointer" />
                  </div>
                </div>

                <div className="flex flex-row pb-5 pt-5 justify-between">
                  <p className="border-b-4 border-[#017189]">Active(3)</p>
                  <p>Inactive(2)</p>
                  <p>close(0)</p>
                </div>
                <div className="flex flex-col pt-8 space-y-9">
                  <div className=" bg-[#EEF7F9] py-4 px-1 rounded-md flex flex-row justify-between w-full">
                    <div className="flex flex-row space-x-2">
                      <img
                        alt="alt"
                        src="/img/euro.png"
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm">EUR Wallet</span>
                        <span className="text-sm">EUR</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="font-bold">&euro; 2,000,000.00</span>
                      <span className="text-sm">Default</span>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row space-x-2">
                      <img
                        alt="alt"
                        src="/img/usd.png"
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm">Personal Account</span>
                        <span className="text-sm">USD</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="font-bold">&#36; 10,250.00</span>
                      {/* <span className="text-sm">Default</span> */}
                    </div>
                  </div>

                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row space-x-2">
                      <img
                        alt="alt"
                        src="/img/uk.png"
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm">School Savings</span>
                        <span className="text-sm">GDP</span>
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="font-bold">&#163; 500.00</span>
                      {/* <span className="text-sm">Default</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-7/12">
                <div className="bg-white shadow-sm">
                  <div className="border-2 rounded-md p-4 flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                      <span className="flex flex-row text-green-600  space-x-3 items-center">
                        <span className="bg-green-600  w-2 h-2 mr-2 rounded-full"></span>
                        Active
                      </span>
                      <span>EUR Wallet</span>
                      <span className="text-[#0A6375] font-bold">EUR</span>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">&euro;2,000,000.50</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row my-8 justify-between items-center">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-5 items-center justify-between ">
                      <p className="text-gray-600">Ledger Balance</p>
                      <p className="font-bold text-md">&#163;2,000,000.50</p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-gray-600">Blocked Balance</p>
                      <p className="font-bold text-md">&#163;0.00</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 ">
                    <div className="flex flex-row space-x-5 items-center justify-between ">
                      <p className="text-gray-600">Total Incoming</p>
                      <p className="font-bold text-md">&#163;2,000,000.50</p>
                    </div>
                    <div className=" flex flex-row items-center justify-between">
                      <p className="text-gray-600">Total Outgoing</p>
                      <p className="font-bold text-md">&#163;2,000,000.50</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="bg-white border-2 cursor-pointer flex flex-row items-center justify-center p-2 text-center rounded-md border-[#017189] text-[#017189]">
                    <img alt="alt" src="/img/payment.png" className="mr-2" />
                    <span>Payment</span>
                  </div>
                  <div className="bg-white border-2 cursor-pointer flex flex-row items-center justify-center p-2 text-center rounded-md border-[#017189] text-[#017189]">
                    <img alt="alt" src={arrow} className="mr-2" />
                    <span>Pay In</span>
                  </div>
                  <div className="bg-white border-2 cursor-pointer flex flex-row items-center justify-center p-2 text-center rounded-md border-[#017189] text-[#017189]">
                    <img alt="alt" src="/img/exchange.png" className="mr-2" />
                    <span>Exchange</span>
                  </div>
                </div>

                <div>
                  <div className="mt-5 flex flex-row items-center text-[#017189]">
                    <p>More options</p>
                    <ChevronDownIcon className="h-7 ml-2 text-[#017189] cursor-pointer" />
                  </div>

                  <div className="space-y-4 mt-8">
                    <div className="flex flex-row items-center">
                      <img alt="alt" src={icon1} className="fill-white  mr-4" />
                      <p className="text-gray-700">Remove as default wallet</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img alt="alt" src={icon2} className="fill-white  mr-4" />
                      <p className="text-gray-700">View Linked Card</p>
                    </div>

                    <div className="flex flex-row items-center">
                      <img alt="alt" src={icon3} className="fill-white  mr-4" />
                      <p className="text-gray-700">Statements</p>
                    </div>

                    <div className="flex flex-row items-center">
                      <img alt="alt" src={icon4} className="fill-white mr-4" />
                      <p className="text-gray-700">Inflow Details</p>
                    </div>

                    <div className="flex flex-row items-center">
                      <img alt="alt" src={icon5} className="fill-white  mr-4" />
                      <p className="text-gray-700">Wallet Information</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-row pb-5 pt-5 justify-between">
                      <p className="">Activity</p>
                      <p className="border-b-4 border-[#017189] font-bold">
                        Transactions
                      </p>
                      <p>Invoices</p>
                    </div>
                  </div>

                  <div className="flex flex-col  justify-between">
                    <div className="flex flex-col ">
                      <div className="flex flex-row items-center justify-between ">
                        <p className="text-gray-600">22 Jul, 2022</p>
                        <p className="font-bold text-md text-[#0A6375]">
                          View All
                        </p>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <div className=" bg-white py-4 px-1 rounded-md flex flex-row justify-between w-full">
                          <div className="flex flex-row space-x-2">
                            <img
                              alt="alt"
                              src={payinvoucher}
                              className="rounded-full"
                            />
                            <div className="flex flex-col">
                              <span className="text-sm">Pay In-Voucher</span>
                              <span className="text-sm">EUR wallet</span>
                            </div>
                          </div>
                          <div className="flex flex-col text-right">
                            <span className="font-bold text-[#16A34A]">
                              &euro;750.65
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ScreenOne;
