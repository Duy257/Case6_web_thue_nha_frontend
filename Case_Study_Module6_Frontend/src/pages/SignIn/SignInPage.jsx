import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAction,
  setStatusAuthAction,
} from "../../redux/actionThunk/authActionThunk";
import { gapi } from 'gapi-script'
import LoginGoogle from "./GoogleLogin";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";
const clientID = "834466386428-j6ifk7es8vo0k3r86c50ekojr26jd1m1.apps.googleusercontent.com";
const clientSecret = "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";

export function SignInPage() {
  const disPatch = useDispatch();
  const navigate = useNavigate();

  let { status } = useSelector((state) => state.auth);
  useEffect(()=> {
    function start(){
      gapi.client.init({
        clientId: clientID,
        scope: "profile"
      })
    }
    gapi.load("client:auth2", start)
  })

  useEffect(() => {
    if (status === "fulfilled") {
      openNotificationWithIcon({type: 'success', message: "Đăng nhập thành công!!!"});
      navigate("/");
      disPatch(setStatusAuthAction());
    }else if (status === "rejected") {
      openNotificationWithIcon({type: 'error', message: "Tài khoản hoặc mật khẩu sai!!!"});
    }
  }, [status]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Không để trống"),
      password: Yup.string().required("Không để trống"),
    }),
    onSubmit: (values) => {
      disPatch(loginAction(values));
    },
  });
  useEffect(() => {
    if (status == "fulfilled") {
      navigate("/");
      disPatch(setStatusAuthAction());
    }
  }, [status]);
  //   status == "fulfilled" && navigate("/");

  return (
      <div>

        <form onSubmit={formik.handleSubmit}>
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className=" bg-[#ffffff] flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                  href="#"
                  className="flex items-center mb-6 text-2xl font-semibold text-gray-900 white:text-white"
              ></a>
              <div className=" regal- write w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                    Đăng nhập
                  </h1>
                  <div>
                    <label
                        htmlFor="username"
                        className="flex justify-start  mb-2 text-sm font-medium  dark:text-black"
                    >
                      Tên đăng nhập *
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className={
                          formik.touched.username && formik.errors.username
                              ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                              : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          {formik.errors.username}
                        </p>
                    ) : null}
                  </div>
                  <div>
                    <label
                        htmlFor="password"
                        className="flex justify-start mb-2 text-sm font-medium dark:text-black"
                    >
                      Nhập mật khẩu *
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className={
                          formik.touched.password && formik.errors.password
                              ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                              : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          {formik.errors.username}
                        </p>
                    ) : null}
                  </div>

                  <button
                      type="submit"
                      className="w-full text-white bg-[#14f1d7] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Đăng nhập
                  </button>
                  <LoginGoogle/>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                    Bạn chưa có sẵn tài khoản?
                    <Link
                        to={"/register"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Đăng ký
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>

  );
}
