import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../../redux/actionThunk/userActionThunk";

import LogoutGoogle from "../../pages/SignIn/LogoutGoogle";
import {getHistory} from "../../redux/actionThunk/houseActionThunk";
const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const disPatch = useDispatch();
  let { user } = useSelector((state) => state.user);
  let { status } = useSelector((state) => state.auth);
  let token = !!localStorage.getItem("accessToken")
  const handellogout = () => {
    navigate("/login");
  };
  useEffect(() => {
    disPatch(getUserById());
  }, []);
  return (
    <div className="  font-bold text-[#7f7f7f] fixed top-0 left-0 right-0 z-50 bg-white shadow-md shadow-slate-400">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Flogo.png?alt=media&token=5153edea-5f50-437b-9f8a-7594126d1b46"
              alt=""
              className="w-full h-16"
            />
          </Link>
        </div>
        <div>
          <ul className="flex justify-between items-center">
            <li className="relative inline-block text-left">
              <a href="#" className="mx-3 hover:text-[#6a6969]">
                Thuê nhà
              </a>
            </li>
            <li>
              <a href="/profile/addHouse" className="mx-3 hover:text-[#6a6969]">
                Đăng tin
              </a>
            </li>
            {token ? (
              <>
                <li>
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center items-center rounded-md py-2 text-sm font-medium text-gray-700 shadow-sm "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => setShow(!show)}
                    >
                      <img
                        src={user && `${user?.avatar}`}
                        alt=""
                        className="w-8 h-8 rounded-3xl"
                      />
                      {user && user?.username}
                    </button>

                  </div>
                  {show && (
                    <div
                      className="absolute top-16 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      // tabindex="-1"
                    >
                      <div className="py-1" role="none">
                        <Link
                          to={user && `/profile/${user._id}`}
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                          Account
                        </Link>
                        <LogoutGoogle/>

                        <Link
                            to={"/notification"}
                            class="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-0"
                        >
                          Notification
                        </Link>


                        {/*<button*/}
                        {/*  type="submit"*/}
                        {/*  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"*/}
                        {/*  role="menuitem"*/}
                        {/*  // tabindex="-1"*/}
                        {/*  id="menu-item-3"*/}
                        {/*  onClick={() => handellogout()}*/}
                        {/*>*/}
                        {/*  Sign out*/}
                        {/*</button>*/}
                      </div>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <>
                <li className="mx-3 border rounded-lg py-2 px-3 border-[#7f7f7f] hover:bg-[#14f1d7] hover:text-white hover:border-[#14f1d7]">
                  <Link to={"/login"}>Đăng nhập</Link>
                </li>
                <li className="mx-3 border rounded-lg py-2 px-3 border-[#7f7f7f] hover:bg-[#14f1d7] hover:text-white hover:border-[#14f1d7]">
                  <Link to={"/register"}>Đăng Ký</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
