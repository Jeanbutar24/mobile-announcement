import React from "react";
import { menu1, save } from "../adminIcon";

const Announcement = () => {
  return (
    <div className=" min-h-screen min-w-full ">
      <div className="top ml-5 mt-7 mb-4">
        <img src={menu1} alt="" height={30} width={30} />
      </div>
      <div className="bottom border border-3 border-gray-600 border-b-0 rounded-2xl">
        <div className="title  m-5 mb-14">
          <p>
            Selamat Pagi,{" "}
            <span className="text-blue-800 font-bold -tracking-tighter">
              Jean
            </span>
          </p>
          <h1 className="text-3xl font-semibold tracking-widest text-gray-900 mb-4">
            Pengumuman 2022
          </h1>
          <hr className="flex justify-start w-1/6 border border-t-8 border-indigo-900" />
        </div>
        <div className="body ">
          <div className="item  m-5 border border-3 border-gray-400 p-4 rounded-2xl">
            <div className="time mb-3">
              <div className=" flex justify-between items-center">
                <p className="max-w-max text-gray-600">
                  03/12/2022
                  <hr className="w-full border border-t-5 border-gray-900" />
                </p>
                <img src={save} alt="" width={30} height={30} />
              </div>
            </div>
            <div className="event text-2xl font-semibold text-rose-900 mb-4">
              Cuti Bersama
            </div>
            <div className="isi">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing...
              </p>
            </div>
          </div>
          <div className="item  m-5 border border-3 border-gray-400 p-4 rounded-2xl">
            <div className="time mb-3">
              <div className=" flex justify-between items-center">
                <p className="max-w-max text-gray-600">
                  03/11/2022
                  <hr className="w-full border border-t-5 border-gray-900" />
                </p>
                <img src={save} alt="" width={30} height={30} />
              </div>
            </div>
            <div className="event text-2xl font-semibold text-rose-900 mb-4 capitalize">
              renovasi gedung CB
            </div>
            <div className="isi">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing...
              </p>
            </div>
          </div>
          <div className="item  m-5 border border-3 border-gray-400 p-4 rounded-2xl">
            <div className="time mb-3">
              <div className=" flex justify-between items-center">
                <p className="max-w-max text-gray-600">
                  23/10/2022
                  <hr className="w-full border border-t-5 border-gray-900" />
                </p>
                <img src={save} alt="" width={30} height={30} />
              </div>
            </div>
            <div className="event text-2xl font-semibold text-rose-900 mb-4 capitalize">
              info update HRIS
            </div>
            <div className="isi ">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
