import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOne } from "../../redux/actionThunk/houseActionThunk";
import moment from "moment";
import { bookingAction } from "../../redux/actionThunk/bookingActionThunk";
const Booking = () => {
  let house = useSelector((state) => state.house.house);
  let dispatch = useDispatch();
  let { id } = useParams();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const [totalMoney, setTotalMoney] = useState();
  const [booking, setBooking] = useState({
    startDay: "",
    endDay: "",
    totalMoney: "",
    idHome: "",
    idOwner: "",
  });
  useEffect(() => {
    dispatch(getOne(id));
  }, []);
  useEffect(() => {
    if (startDay && endDay) {
      let mountDay = moment(endDay).diff(moment(startDay), "days");
      setBooking({
        ...booking,
        startDay: startDay,
        endDay: endDay,
        totalMoney: mountDay * house.price,
      });
    }
  }, [startDay, endDay]);
  const handelSubmit = (e) => {
    e.preventDefault();
    booking.idOwner = house.idUser;
    booking.idHome = house._id;

    console.log(booking);
    dispatch(bookingAction(booking));
  };
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house && house?.name}</h2>
            <h3 className="text-lg mb-4">{house && house?.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 rounded-full text-white px-3 inline-block">
              {house && house?.typeRoom}
            </div>
            <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
              {/* {property?.country} */}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">
            {house && house?.price}/1 ngày
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house && house?.idImage[0]?.link} alt="" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                {/* <BiBed className="text-2xl" /> */}
                <div className="text-lg font-medium">
                  {house && house?.amountBedroom}
                </div>
              </div>
              <div className="flex gap-x-2 items-center">
                {/* <BiBath className="text-2xl" /> */}
                <div className="text-lg font-medium">
                  {house && house?.amountBathroom}
                </div>
              </div>
              <div className="flex gap-x-2 items-center">
                {/* <BiArea className="text-2xl" /> */}
                <div className="text-lg font-medium">{}</div>
              </div>
            </div>
            <p>{house && house?.description}</p>
          </div>
          <div className="flex-1 w-full mb-8 bg-white border border-gray-100 rounded-lg px-6 py-8">
            <form className="flex flex-col gap-y-4" onSubmit={handelSubmit}>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Ngày bắt đầu
                </label>
                <input
                  type="date"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setStartDay(e.target.value)}
                  name="startDay"
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Ngày kết thúc
                </label>
                <input
                  type="date"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setEndDay(e.target.value)}
                  name="endDay"
                />
              </div>
              <h2>Tổng tiền:{booking.totalMoney}</h2>
              <div className="flex gap-x-2">
                <button
                  type="submit"
                  className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                >
                  Đặt phòng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
