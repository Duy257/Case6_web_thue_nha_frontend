import React from "react";
import Header from "../header/header";

const Banner = () => {
  return (
    <>
      <div>
        <Header />
        <div className="relative">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/images-c1654.appspot.com/o/files%2Fbig-city.jpg?alt=media&token=8cf6b135-b966-40b8-88bf-083800166eb5"
            alt=""
            className="object-cover h-[510px] w-full "
          />
        </div>
        <div className="absolute top-1/4 left-1/4 bg-black p-6 rounded-lg bg-opacity-5">
          <div className="relative w-full mt-3">
            <input
              type="text"
              id="first_name"
              className="mx-4 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5 py-3 "
              placeholder="Nhập địa chỉ cần tìm kiếm"
              required
            />

            <button
              type="submit"
              className="absolute top-0 right-5 p-2.5 py-3 text-sm font-medium bg-[#14f1d7] hover:bg-green-800 rounded-r-lg focus:outline-none"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 z-50 text-white "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="flex mt-6 mb-4">
            <div className="mx-4 my-3">
              <select
                id="countries"
                className="bg-gray-50 text-[#6a6969] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Chọn địa chỉ</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mx-4 my-3">
              <select
                id="countries"
                className="bg-gray-50 text-[#6a6969] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Số phòng ngủ</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mx-4 my-3">
              <select
                id="countries"
                className="bg-gray-50 text-[#6a6969] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Số phòng tắm</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mx-4">
              <label
                htmlFor="start_day"
                className="block mb-2 text-sm font-medium text-[#ffffff] dark:text-gray-300"
              >
                Ngày bắt đầu
              </label>
              <input
                type="date"
                id="start_day"
                className="bg-gray-50 text-[#6a6969] text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mx-4">
              <label
                htmlFor="end_day"
                className="block mb-2 text-sm font-medium text-black dark:text-gray-300"
              >
                Ngày kết thúc
              </label>
              <input
                type="date"
                id="end_day"
                className="bg-gray-50 text-[#6a6969] text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
